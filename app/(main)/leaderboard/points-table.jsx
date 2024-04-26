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


const PointsTable = ({pointBoard}) => {
  return (
    // <Table>
    //   <TableCaption>This is a Leaderboard.</TableCaption>
    //   <TableHeader>
    //     <TableRow>
    //       <TableHead className="w-[100px]">User</TableHead>
    //       <TableHead>Email</TableHead>
    //       <TableHead className="text-right">Points</TableHead>
    //     </TableRow>
    //   </TableHeader>
    //   <TableBody>
    //     {pointBoard.map((item) => (
    //       <TableRow key={item.id}>
    //         <TableCell className="font-medium">{item.name}</TableCell>
    //         <TableCell>{item.email}</TableCell>
    //         <TableCell className="text-right font-bold">{item.points}</TableCell>
    //       </TableRow>
    //     ))}
    //   </TableBody>
    //   <TableFooter>
    //     {/* <TableRow>
    //       <TableCell colSpan={3}>Total</TableCell>
    //       <TableCell className="text-right">$2,500.00</TableCell>
    //     </TableRow> */}
    //   </TableFooter>
    // </Table>
    <>
    {pointBoard.map((item)=>(
        <p key={item.id}>{item.points}</p>
    ))}
    </>
  );
};

export default PointsTable;
