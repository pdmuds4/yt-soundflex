import { ChakraProvider, TableContainer, Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

const MoviesTable: React.FC<PropsWithChildren> = (props) => {
    return (
        <TableContainer>
            <Table size='sm' variant='striped'>
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>サムネイル</Th>
                        <Th>ファイル名</Th>
                        <Th>形式</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    { props.children }
                </Tbody>
            </Table>
        </TableContainer>
    );
}

export default MoviesTable;

// const DebugMoviesTable: React.FC = () => {
//     return (
//         <ChakraProvider>
//             <MoviesTable />
//         </ChakraProvider>
//     );
// }

// export default DebugMoviesTable;