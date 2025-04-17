"use client";

import { PaginationDemo } from "@/components/app-pagination";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const driverList = [
  {
    lastName: "Smith",
    firstName: "John",
    vehicleModel: "Toyota Camry",
    birthdate: "1990-01-01",
  },
  {
    lastName: "Doe",
    firstName: "Jane",
    vehicleModel: "Honda Accord",
    birthdate: "1985-05-15",
  },
  {
    lastName: "Brown",
    firstName: "Michael",
    vehicleModel: "Ford Explorer",
    birthdate: "1992-07-20",
  },
  {
    lastName: "Johnson",
    firstName: "Emily",
    vehicleModel: "Chevrolet Malibu",
    birthdate: "1995-03-10",
  },
  {
    lastName: "Davis",
    firstName: "Christopher",
    vehicleModel: "Nissan Altima",
    birthdate: "1988-11-25",
  },
  {
    lastName: "Wilson",
    firstName: "Sarah",
    vehicleModel: "Subaru Outback",
    birthdate: "1993-09-05",
  },
  {
    lastName: "Taylor",
    firstName: "David",
    vehicleModel: "Mazda CX-5",
    birthdate: "1991-06-30",
  },
  {
    lastName: "Anderson",
    firstName: "Laura",
    vehicleModel: "Hyundai Sonata",
    birthdate: "1987-04-12",
  },
  {
    lastName: "Thomas",
    firstName: "James",
    vehicleModel: "Kia Sorento",
    birthdate: "1994-08-18",
  },
  {
    lastName: "Moore",
    firstName: "Patricia",
    vehicleModel: "Volkswagen Jetta",
    birthdate: "1989-12-22",
  },
  {
    lastName: "Martin",
    firstName: "Robert",
    vehicleModel: "Jeep Wrangler",
    birthdate: "1996-02-14",
  },
];

export default function DriverTablePage() {
  return (
    <div>
      <Table className="my-5">
        <TableCaption>A list of drivers and their details.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Last Name</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Vehicle Model</TableHead>
            <TableHead>Birthdate</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {driverList.map((driver, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{driver.lastName}</TableCell>
              <TableCell>{driver.firstName}</TableCell>
              <TableCell>{driver.vehicleModel}</TableCell>
              <TableCell>{driver.birthdate}</TableCell>
              <TableCell>
                <button className="text-blue-500 hover:underline">View</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationDemo />
    </div>
  );
}
