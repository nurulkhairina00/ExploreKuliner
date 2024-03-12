/* eslint-disable @next/next/no-img-element */
import React from "react";
import axios from "axios";
import Link from "next/link";
import SocialMedia from "../../components/main/SocialMedia";

const token = (props) => {
  const { data_user, is_actived_before } = props;

  let head;
  let pesan;
  if (is_actived_before) {
    head = "Oops, Aktivasi Sudah Diaktifkan";
    pesan = `Akun ${data_user.nama_lengkap} sudah pernah diaktifkan sebelumnya.`;
  } else {
    head = "Aktivasi Akun Berhasil";
    pesan = `Selamat Aktivasi akun ${data_user.nama_lengkap} sudah berhasil teraktivasi`;
  }

  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
      <div className="pb-[8vw] sm:pb-12">
        <img
          src="/logo/logo-explore-kuliner-v2.svg"
          alt="logo-explore-kuliner"
          className="w-[32vw] sm:w-52 lg:w-52"
        />
      </div>
      <div className="w-3/4 lg:w-1/2 xl:w-1/3 p-[4vw] sm:p-4 rounded-[2vw] sm:rounded-lg shadow-lg text-center border-secondary border-t-4 bg-primary">
        <div className="flex items-center justify-center py-[2vw] sm:py-4">
          {is_actived_before ? (
            <img
              alt="svgImg"
              className="w-[32vw] h-[32vw] sm:w-52 sm:h-52"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgo8cGF0aCBmaWxsPSIjZWUzZTU0IiBkPSJNMTMgMjdBMiAyIDAgMSAwIDEzIDMxQTIgMiAwIDEgMCAxMyAyN1oiPjwvcGF0aD48cGF0aCBmaWxsPSIjZjFiYzE5IiBkPSJNNzcgMTJBMSAxIDAgMSAwIDc3IDE0QTEgMSAwIDEgMCA3NyAxMloiPjwvcGF0aD48cGF0aCBmaWxsPSIjZjlkYmQyIiBkPSJNNTAgMTNBMzcgMzcgMCAxIDAgNTAgODdBMzcgMzcgMCAxIDAgNTAgMTNaIj48L3BhdGg+PHBhdGggZmlsbD0iI2YxYmMxOSIgZD0iTTgzIDExQTQgNCAwIDEgMCA4MyAxOUE0IDQgMCAxIDAgODMgMTFaIj48L3BhdGg+PHBhdGggZmlsbD0iI2VlM2U1NCIgZD0iTTg3IDIyQTIgMiAwIDEgMCA4NyAyNkEyIDIgMCAxIDAgODcgMjJaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZiY2Q1OSIgZD0iTTgxIDc0QTIgMiAwIDEgMCA4MSA3OCAyIDIgMCAxIDAgODEgNzR6TTE1IDU5QTQgNCAwIDEgMCAxNSA2NyA0IDQgMCAxIDAgMTUgNTl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2VlM2U1NCIgZD0iTTI1IDg1QTIgMiAwIDEgMCAyNSA4OUEyIDIgMCAxIDAgMjUgODVaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE4LjUgNTFBMi41IDIuNSAwIDEgMCAxOC41IDU2QTIuNSAyLjUgMCAxIDAgMTguNSA1MVoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZjFiYzE5IiBkPSJNMjEgNjZBMSAxIDAgMSAwIDIxIDY4QTEgMSAwIDEgMCAyMSA2NloiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNODAgMzNBMSAxIDAgMSAwIDgwIDM1QTEgMSAwIDEgMCA4MCAzM1oiPjwvcGF0aD48Zz48cGF0aCBmaWxsPSIjZmRmY2VlIiBkPSJNNTAgMjZBMjQgMjQgMCAxIDAgNTAgNzRBMjQgMjQgMCAxIDAgNTAgMjZaIj48L3BhdGg+PHBhdGggZmlsbD0iIzQ3MmIyOSIgZD0iTTUwLDI2LjRDNjMsMjYuNCw3My42LDM3LDczLjYsNTBTNjMsNzMuNiw1MCw3My42UzI2LjQsNjMsMjYuNCw1MFMzNywyNi40LDUwLDI2LjQgTTUwLDI1IGMtMTMuOCwwLTI1LDExLjItMjUsMjVzMTEuMiwyNSwyNSwyNXMyNS0xMS4yLDI1LTI1UzYzLjgsMjUsNTAsMjVMNTAsMjV6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2VlM2U1NCIgZD0iTTUwIDMwLjRBMTkuNiAxOS42IDAgMSAwIDUwIDY5LjZBMTkuNiAxOS42IDAgMSAwIDUwIDMwLjRaIj48L3BhdGg+PHBhdGggZmlsbD0iI2YwNjI3MiIgZD0iTTUwLDMzLjRjMTAuMywwLDE4LjgsOCwxOS41LDE4LjFjMC0wLjUsMC4xLTEsMC4xLTEuNWMwLTEwLjgtOC44LTE5LjYtMTkuNi0xOS42UzMwLjQsMzkuMiwzMC40LDUwIGMwLDAuNSwwLDEsMC4xLDEuNUMzMS4yLDQxLjQsMzkuNywzMy40LDUwLDMzLjR6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzQ3MmIyOSIgZD0iTTUwLDMwLjhjMTAuNiwwLDE5LjMsOC42LDE5LjMsMTkuMmMwLDEwLjYtOC42LDE5LjMtMTkuMywxOS4zYy0xMC42LDAtMTkuMi04LjYtMTkuMi0xOS4zIEMzMC44LDM5LjQsMzkuNCwzMC44LDUwLDMwLjggTTUwLDMwYy0xMSwwLTIwLDktMjAsMjBjMCwxMSw5LDIwLDIwLDIwYzExLDAsMjAtOSwyMC0yMFM2MSwzMCw1MCwzMEw1MCwzMHoiPjwvcGF0aD48L2c+PGc+PHBhdGggZmlsbD0iI2ZkZmNlZSIgZD0iTTUyLjMsNTBsNS45LTUuOWMwLjMtMC4zLDAuNS0wLjcsMC41LTEuMXMtMC4yLTAuOC0wLjUtMS4xYy0wLjYtMC42LTEuNy0wLjYtMi4zLDBMNTAsNDcuNyBsLTUuOS01LjljLTAuNi0wLjYtMS43LTAuNi0yLjMsMGMtMC42LDAuNi0wLjYsMS43LDAsMi4zbDUuOSw1LjlsLTUuOSw1LjljLTAuNiwwLjYtMC42LDEuNywwLDIuM2MwLjYsMC42LDEuNywwLjYsMi4zLDBsNS45LTUuOSBsNS45LDUuOWMwLjMsMC4zLDAuNywwLjUsMS4xLDAuNXMwLjgtMC4yLDEuMS0wLjVjMC42LTAuNiwwLjYtMS43LDAtMi4zTDUyLjMsNTB6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzQ3MmIyOSIgZD0iTTQzLDU5Yy0wLjUsMC0xLTAuMi0xLjQtMC42Yy0wLjgtMC44LTAuOC0yLDAtMi44bDUuNi01LjZsLTUuNi01LjZDNDEuMiw0NCw0MSw0My41LDQxLDQzIHMwLjItMSwwLjYtMS40YzAuOC0wLjgsMi4xLTAuOCwyLjgsMGw1LjYsNS42bDUuNi01LjZjMC44LTAuOCwyLTAuOCwyLjgsMEM1OC44LDQyLDU5LDQyLjUsNTksNDNzLTAuMiwxLTAuNiwxLjRMNTIuOCw1MGw1LjYsNS42IGMwLjgsMC44LDAuOCwyLDAsMi44Yy0wLjgsMC44LTIuMSwwLjgtMi44LDBMNTAsNTIuOGwtNS42LDUuNkM0NCw1OC44LDQzLjUsNTksNDMsNTl6IE00Myw0MS43Yy0wLjMsMC0wLjYsMC4xLTAuOSwwLjQgYy0wLjIsMC4yLTAuNCwwLjUtMC40LDAuOXMwLjEsMC42LDAuNCwwLjlsNi4xLDYuMWwtNi4xLDYuMWMtMC41LDAuNS0wLjUsMS4zLDAsMS44YzAuNSwwLjUsMS4zLDAuNSwxLjgsMGw2LjEtNi4xbDYuMSw2LjEgYzAuNSwwLjUsMS4zLDAuNSwxLjgsMGMwLjUtMC41LDAuNS0xLjMsMC0xLjhMNTEuOCw1MGw2LjEtNi4xYzAuMi0wLjIsMC40LTAuNiwwLjQtMC45cy0wLjEtMC42LTAuNC0wLjljLTAuNS0wLjUtMS4zLTAuNS0xLjgsMCBMNTAsNDguMmwtNi4xLTYuMUM0My42LDQxLjksNDMuMyw0MS43LDQzLDQxLjd6Ij48L3BhdGg+PC9nPgo8L3N2Zz4="
            />
          ) : (
            <img
              alt="svgImg"
              className="w-[32vw] h-[32vw] sm:w-52 sm:h-52"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgo8cGF0aCBmaWxsPSIjZTZlZGI3IiBkPSJNNTAgMTNBMzcgMzcgMCAxIDAgNTAgODdBMzcgMzcgMCAxIDAgNTAgMTNaIj48L3BhdGg+PHBhdGggZmlsbD0iIzg4YWU0NSIgZD0iTTEzIDI3QTIgMiAwIDEgMCAxMyAzMUEyIDIgMCAxIDAgMTMgMjdaIj48L3BhdGg+PHBhdGggZmlsbD0iI2YxYmMxOSIgZD0iTTc3IDEyQTEgMSAwIDEgMCA3NyAxNCAxIDEgMCAxIDAgNzcgMTJ6TTgzIDExQTQgNCAwIDEgMCA4MyAxOSA0IDQgMCAxIDAgODMgMTF6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzg4YWU0NSIgZD0iTTg3IDIyQTIgMiAwIDEgMCA4NyAyNkEyIDIgMCAxIDAgODcgMjJaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZiY2Q1OSIgZD0iTTgxIDc0QTIgMiAwIDEgMCA4MSA3OCAyIDIgMCAxIDAgODEgNzR6TTE1IDU5QTQgNCAwIDEgMCAxNSA2NyA0IDQgMCAxIDAgMTUgNTl6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzg4YWU0NSIgZD0iTTI1IDg1QTIgMiAwIDEgMCAyNSA4OUEyIDIgMCAxIDAgMjUgODVaIj48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE4LjUgNTFBMi41IDIuNSAwIDEgMCAxOC41IDU2QTIuNSAyLjUgMCAxIDAgMTguNSA1MVoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZjFiYzE5IiBkPSJNMjEgNjZBMSAxIDAgMSAwIDIxIDY4QTEgMSAwIDEgMCAyMSA2NloiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNODAgMzNBMSAxIDAgMSAwIDgwIDM1QTEgMSAwIDEgMCA4MCAzM1oiPjwvcGF0aD48Zz48cGF0aCBmaWxsPSIjODhhZTQ1IiBkPSJNNTAgMjYuMDQyQTIzLjk1OCAyMy45NTggMCAxIDAgNTAgNzMuOTU4QTIzLjk1OCAyMy45NTggMCAxIDAgNTAgMjYuMDQyWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0NzJiMjkiIGQ9Ik01MCwyNi40YzEzLjAxMywwLDIzLjYsMTAuNTg3LDIzLjYsMjMuNlM2My4wMTMsNzMuNiw1MCw3My42UzI2LjQsNjMuMDEzLDI2LjQsNTAgUzM2Ljk4NywyNi40LDUwLDI2LjQgTTUwLDI1Yy0xMy44MDcsMC0yNSwxMS4xOTMtMjUsMjVzMTEuMTkzLDI1LDI1LDI1czI1LTExLjE5MywyNS0yNVM2My44MDcsMjUsNTAsMjVMNTAsMjV6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZkZmNlZiIgZD0iTTUwIDMwLjVBMTkuNSAxOS41IDAgMSAwIDUwIDY5LjVBMTkuNSAxOS41IDAgMSAwIDUwIDMwLjVaIj48L3BhdGg+PHBhdGggZmlsbD0iIzQ3MmIyOSIgZD0iTTY5Ljc2Miw0Ni45NTRjLTAuMDQzLTAuMjczLTAuMjk4LTAuNDYtMC41NzEtMC40MThjLTAuMjczLDAuMDQyLTAuNDYxLDAuMjk3LTAuNDE3LDAuNTcxIGMwLjkzMSw1Ljk3Ni0xLjA1NCwxMi4wODItNS4zMDksMTYuMzM0Yy03LjQxNyw3LjQxMi0xOS40ODUsNy40MTItMjYuOTAyLDBjLTcuNDE3LTcuNDExLTcuNDE3LTE5LjQ3MSwwLTI2Ljg4MyBjNy40MTctNy40MTEsMTkuNDg1LTcuNDExLDI2LjkwMiwwYzAuNzc4LDAuNzc4LDEuNDkzLDEuNjQyLDIuMTg2LDIuNjQxYzAuMTU4LDAuMjI3LDAuNDY5LDAuMjg0LDAuNjk3LDAuMTI2IGMwLjIyNS0wLjE1NSwwLjI4My0wLjQ2OCwwLjEyNi0wLjY5NmMtMC43MjgtMS4wNDktMS40ODEtMS45NTgtMi4zMDItMi43NzhjLTcuODA3LTcuODAxLTIwLjUxLTcuODAyLTI4LjMxOCwwIGMtNy44MDcsNy44MDItNy44MDcsMjAuNDk2LDAsMjguMjk4YzcuODA3LDcuODAxLDIwLjUxLDcuODAyLDI4LjMxOCwwQzY4LjY1Myw1OS42NzIsNzAuNzQzLDUzLjI0NCw2OS43NjIsNDYuOTU0eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0NzJiMjkiIGQ9Ik02Ny41NjksNDIuNzk2YzAuMTA1LDAuMjU2LDAuMzk4LDAuMzc4LDAuNjUzLDAuMjczYzAuMjU0LTAuMTA0LDAuMzc4LTAuMzk2LDAuMjcyLTAuNjUyIGMtMC4zMTUtMC43NjYtMC42MDktMS4zOTUtMC45MjYtMS45NzdjLTAuMTMyLTAuMjQzLTAuNDM2LTAuMzMyLTAuNjc5LTAuMmMtMC4wNDMsMC4wMjMtMC4wODIsMC4wNTMtMC4xMTUsMC4wODYgYy0wLjE1MywwLjE1My0wLjE5NCwwLjM5My0wLjA4NiwwLjU5M0M2Ni45ODksNDEuNDY4LDY3LjI2OSw0Mi4wNjUsNjcuNTY5LDQyLjc5NnoiPjwvcGF0aD48L2c+PGc+PHBhdGggZmlsbD0iIzg4YWU0NSIgZD0iTTQxLDQ4LjM3NWMtMC40MzQsMC0wLjg0MiwwLjE2OS0xLjE0OSwwLjQ3NmMtMC4zMDcsMC4zMDctMC40NzYsMC43MTUtMC40NzYsMS4xNDkgczAuMTY5LDAuODQyLDAuNDc2LDEuMTQ5bDcsN2MwLjMwNywwLjMwNywwLjcxNSwwLjQ3NiwxLjE0OSwwLjQ3NlY1OWwwLjAzMS0wLjM3NWMwLjQ0NS0wLjAwOSwwLjg2OS0wLjIwMSwxLjE2Ny0wLjUyNmwxMS0xMiBjMC4yOTMtMC4zMiwwLjQ0NC0wLjczNSwwLjQyNi0xLjE2OWMtMC4wMTktMC40MzQtMC4yMDYtMC44MzMtMC41MjUtMS4xMjdjLTAuMzIxLTAuMjkzLTAuNzI4LTAuNDUtMS4xNjktMC40MjYgYy0wLjQzMywwLjAxOS0wLjgzMywwLjIwNS0xLjEyNiwwLjUyNWwtOS44NTQsMTAuNzQ5bC01LjgtNS44QzQxLjg0Miw0OC41NDQsNDEuNDM0LDQ4LjM3NSw0MSw0OC4zNzV6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzQ3MmIyOSIgZD0iTTU5LDQzLjc1TDU5LDQzLjc1YzAuMzEzLDAsMC42MTMsMC4xMTcsMC44NDUsMC4zMjljMC4yNDYsMC4yMjYsMC4zODksMC41MzMsMC40MDQsMC44NjcgYzAuMDE0LDAuMzM0LTAuMTAyLDAuNjUzLTAuMzI4LDAuODk5bC0xMSwxMmMtMC4yMjksMC4yNS0wLjU1NSwwLjM5OC0wLjkyMSwwLjQwNWMtMC4zMzQsMC0wLjY0OC0wLjEzLTAuODg0LTAuMzY2bC03LTcgQzM5Ljg4LDUwLjY0OCwzOS43NSw1MC4zMzQsMzkuNzUsNTBzMC4xMy0wLjY0OCwwLjM2Ny0wLjg4NEM0MC4zNTIsNDguODgsNDAuNjY2LDQ4Ljc1LDQxLDQ4Ljc1czAuNjQ4LDAuMTMsMC44ODQsMC4zNjYgbDUuNTIzLDUuNTIzbDAuNTU0LDAuNTU0bDAuNTI5LTAuNTc3bDkuNTg5LTEwLjQ2MUM1OC4zMTgsNDMuODk0LDU4LjY0NSw0My43NSw1OSw0My43NSBNNTksNDNjLTAuNTQxLDAtMS4wOCwwLjIxOC0xLjQ3NCwwLjY0OSBsLTkuNTg5LDEwLjQ2bC01LjUyMy01LjUyM0M0Mi4wMjQsNDguMTk1LDQxLjUxMiw0OCw0MSw0OHMtMS4wMjQsMC4xOTUtMS40MTQsMC41ODZjLTAuNzgxLDAuNzgxLTAuNzgxLDIuMDQ3LDAsMi44MjhsNyw3IEM0Ni45NjEsNTguNzksNDcuNDcsNTksNDgsNTljMC4wMTUsMCwwLjAyOSwwLDAuMDQzLDBjMC41NDUtMC4wMTIsMS4wNjItMC4yNDYsMS40MzEtMC42NDhsMTEtMTIgYzAuNzQ3LTAuODE0LDAuNjkxLTIuMDgtMC4xMjMtMi44MjZDNTkuOTY3LDQzLjE3NCw1OS40ODMsNDMsNTksNDNMNTksNDN6Ij48L3BhdGg+PC9nPgo8L3N2Zz4="
            />
          )}
        </div>
        <div className="py-[2vw] sm:py-4">
          <p className="font-bold text-[3.5vw] sm:text-xl pb-[1vw] sm:pb-2">
            {head}
          </p>
          <p className="text-[3vw] sm:text-lg pb-[3vw] sm:pb-6">{pesan}</p>
          <Link href="/login">
            <button className="bg-secondary px-[6vw] sm:px-8 py-[1.3vw] sm:py-2 rounded-[2vw] sm:rounded-lg text-[3vw] sm:text-base text-primary my-[3vw] sm:my-4">
              Ke Halaman Login
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-[3vw] sm:gap-5 pt-[6vw] sm:pt-8">
        <SocialMedia background="color" />
      </div>
      <p className="text-black text-center text-[3vw] sm:text-sm sm:text-start font-semibold pt-[3vw] sm:pt-4">
        © copyrights Explorekuliner.com - 2024
      </p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { token } = context.query;
  let data_user = await axios
    .get(
      `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/register/verify/${token}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });

  if (!data_user) {
    return {
      notFound: true,
    };
  }

  let is_actived_before = data_user.status_active === "Y" ? true : false;

  if (!is_actived_before) {
    await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_PATH}:${process.env.NEXT_PUBLIC_API_PORT}/api/${process.env.NEXT_PUBLIC_VER}/register/verify-token`,
      data: {
        token: token,
      },
    })
      .then(() => console.log("Akun berhasil diaktifkan."))
      .catch((error) => {
        throw error;
      });
  }

  return {
    props: {
      data_user: data_user,
      is_actived_before: is_actived_before,
    },
  };
}

export default token;
