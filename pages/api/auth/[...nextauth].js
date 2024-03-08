import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import Router from "next/router";
import axios from "axios";
import { compare } from "bcryptjs";
import Swal from "sweetalert2";

export const authOptions = {
  session: {
    jwt: true,
    maxAge: 12 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user_data = await axios({
          method: "POST",
          url: `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/login`,
          data: {
            email: credentials.email,
            password: credentials.password,
          },
        });

        const user = user_data.data;
        if (!user) {
          throw new Error("Email tidak terdaftar");
        }

        const isValid = await compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Password tidak sesuai");
        }

        if (user.status_active === "N") {
          throw new Error(
            "Akun belum aktif, Mohon periksa email aktivasi Anda!"
          );
        }

        return {
          id: user.id,
          nama_lengkap: user.nama_lengkap,
          email: user.email,
          password: user.password,
          no_hp: user.no_hp,
          token: user.token,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        const { accessToken, ...rest } = user;
        token.accessToken = accessToken;
        token.user = rest;
        token.provider = account.provider;
      }

      return token;
    },

    async session({ session, token }) {
      if (token.provider == "google") {
        let registered_user = await axios({
          method: "POST",
          url: `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/login/check-google`,
          data: {
            email: session.user.email,
          },
        });
        let reg_user = registered_user.data;

        if (!reg_user) {
          await axios({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/register/register-google`,
            data: {
              nama: session.user.name,
              email: session.user.email,
              image: session.user.image,
              no_hp: "",
              password: "LOGIN_GOOGLE",
              hashedPassword: "LOGIN_GOOGLE",
            },
          })
            .then(() => console.log("Register Google Berhasil"))
            .catch((err) => {
              throw err;
            });
        }

        let user_data = await axios({
          method: "POST",
          url: `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/login/google-signin`,
          data: {
            email: session.user.email,
          },
        });

        let user = user_data.data;

        if (!user) {
          throw new Error("Something error");
        }

        if (user.login_google === "N") {
          throw new Error("Email sudah ada");
        }

        let data_di_db = {
          id: user.id,
          nama_lengkap: user.nama_lengkap,
          email: user.email,
          no_hp: user.no_hp,
          token: user.token,
        };

        session.user = {
          ...session.user,
          ...data_di_db,
        };
        session.accessToken = token.accessToken;

        return session;
      }

      session.user = {
        ...session.user,
        ...token.user,
      };
      session.accessToken = token.accessToken;

      return session;
    },

    async signIn(email) {
      if (email.account.provider == "google") {
        let data_user = await axios({
          method: "POST",
          url: `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/login/google-signin`,
          data: {
            email: email.user.email,
          },
        });

        let data = data_user.data;
        if (data) {
          if (data.login_google === "N") {
            return Swal.fire({
              icon: "warning",
              title: "Anda Gagal Login",
              text: "Tidak bisa login dengan Google karena email yang sama telah terdaftar. Silahkan login secara manual atau pilih opsi lupa password",
              showConfirmButton: true,
              confirmButtonText: "Kembali",
              allowOutsideClick: false,
            }).then((result) => {
              if (result.isConfirmed) {
                Router.push("/login-reviewer");
              }
            });
          }
        }
      }

      return true;
    },
  },
};

export default NextAuth(authOptions);
