import { Card, Dropdown, DropdownItem } from "flowbite-react";
import ProfilePictureComp from "./ProfilePictureComp";

export default function ProfileCardComp({ fotoUrl, data, email }) {
  return (
    <Card className="max-w-4xl w-full">
      <div className="flex justify-center px-4 pt-4 ms-40">
        <Dropdown inline label="">
          <DropdownItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Profil Saya
            </a>
          </DropdownItem>
          <DropdownItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Pengaturan
            </a>
          </DropdownItem>
          <DropdownItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Keluar
            </a>
          </DropdownItem>
        </Dropdown>
      </div>

      <div className="flex flex-col items-center pb-10">

        <ProfilePictureComp fotoUrl={fotoUrl} />

        <h5 className="mt-3 mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {data}
        </h5>

        <span className="text-sm text-gray-500 dark:text-gray-400">
          {email}
        </span>

        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Simpan
          </a>

          <a
            href="#"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Edit
          </a>
        </div>

      </div>
    </Card>
  );
}
