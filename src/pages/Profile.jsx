import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import ProfileCardComp from "../components/ProfileCardComp";
import { SideBarComp } from "../components/SideBarComp";
import { CardProfileComp } from "../components/CardProfileComp";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getDataProfile() {
    const url = "https://api.escuelajs.co/api/v1/users/1";
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setProfile(result);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getDataProfile();
  }, []);

  if (loading) {
    return (
      <div className="block mx-auto mt-50 w-100">Sedang memuat data...</div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="font-bold text-2xl mt-5 ms-5">Profil Saya</h1>
      </div>

      <div className="flex justify-between mt-15">
        <SideBarComp />

        <div className="flex justify-center grow">
          <ProfileCardComp
            fotoUrl={profile.avatar}
            data={profile.name}
            email={profile.email}
          />
        </div>

        <CardProfileComp role={profile.role} id={profile.id} />
      </div>
    </>
  );
}
