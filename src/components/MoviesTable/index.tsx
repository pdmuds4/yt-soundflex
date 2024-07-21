import { ChakraProvider, TableContainer, Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

const MoviesTable: React.FC = () => {
    return (
        <TableContainer>
            <Table size='sm' variant='striped'>
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>サムネイル</Th>
                        <Th>保存ファイル名</Th>
                        <Th>保存フォーマット</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    { /* <MovieTableData /> */ }
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