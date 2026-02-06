import { Card } from "flowbite-react";

export function CardProfileComp({ role, id}) {
  return (
    <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {role}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {id}
      </p>
    </Card>
  );
}