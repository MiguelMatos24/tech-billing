import { useEffect, useState } from "react";
import { columns } from "@/components/requirements-table/columns";
import { DataTable } from "@/components/requirements-table/data-table";

const Requirements = () => {
  const [requirements, setRequirements] = useState([]);
  useEffect(() => {
    fetch("/mocks/requirements.json")
      .then((res) => res.json())
      .then((data) => {
        setRequirements(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold pb-4">Requisitos de compliance</h2>
      <DataTable data={requirements} columns={columns} />
    </div>
  );
};

export default Requirements;
