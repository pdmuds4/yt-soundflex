import { ChakraProvider, Image, Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import { s__thumbnailPreview } from "./style"

const Preview: React.FC = () => {
    return (
        <Grid
            width={{base: '100%', md: '50%'}}
            templateColumns='repeat(7, 1fr)'
            gap={4}
        >
            <GridItem sx={s__thumbnailPreview} colSpan={3}>
                <Image
                    objectFit='contain'
                    src={''}
                    alt='youtube thumbnail'
                    borderRadius='lg'
                />
            </GridItem>
            <GridItem colSpan={4}>
                <Heading size={{base: 'lg', md: 'md'}} noOfLines={4}>
                    {}
                </Heading>
                <Text size={{base: 'xs', md: 'xs'}} noOfLines={1}>
                    {}
                </Text>
            </GridItem>
        </Grid>
    )
}

// export default Preview;

const DebugPreview: React.FC = () => {
    return (
        <ChakraProvider>
            <Preview />
        </ChakraProvider>
    )
}

export default DebugPreview;