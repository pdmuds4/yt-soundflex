import { ChakraProvider, TableContainer, Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { s__MoviesTableContainer, s__MoviesTableHeader } from "./style";

const MoviesTable: React.FC<PropsWithChildren> = (props) => {
    return (
        <TableContainer sx={s__MoviesTableContainer}>
            <Table size='sm' variant='striped'>
                <Thead sx={s__MoviesTableHeader}>
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