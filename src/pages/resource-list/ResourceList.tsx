import { useQuery } from "@tanstack/react-query";
import { getLaunches } from "../services/api";
import { Table, Loader, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function ResourceList() {
  const { data, error, isLoading } = useQuery("launches", getLaunches);

  if (isLoading) return <Loader />;
  if (error) return <p>Error fetching data</p>;

  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((launch:any) => (
          <tr key={launch.id}>
            <td>{launch.name}</td>
            <td>{new Date(launch.date_utc).toLocaleDateString()}</td>
            <td>
              <Button component={Link} to={`/resources/${launch.id}`}>
                Details
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
