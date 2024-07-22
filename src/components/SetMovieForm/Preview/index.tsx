import { useState } from "react";
import { ChakraProvider, Image, Grid, GridItem, Heading, Text, Skeleton, SkeletonText } from "@chakra-ui/react"
import { s__thumbnailPreview } from "./style"

import { YoutubeInfoJsonType } from "@domain/youtube_info/jsonType";

const Preview: React.FC<Partial<YoutubeInfoJsonType>> = (props) => {
    const isSkeleton = props.thumbnail_src && props.title && props.channel_name ? false : true;

    return (
        <Grid
            height='200px'
            templateColumns='repeat(7, 1fr)'
            gap={4}
        >
            <GridItem sx={s__thumbnailPreview} colSpan={3}>
                <Skeleton width='100%' isLoaded={!isSkeleton}>
                    <Image
                        height='200px'
                        objectFit='contain'
                        src={props.thumbnail_src}
                        alt='youtube thumbnail'
                        borderRadius='lg'
                    />
                </Skeleton>
            </GridItem>
            <GridItem colSpan={4}>
            {
                isSkeleton ? (
                <Grid gap={7}>
                    <SkeletonText noOfLines={3} spacing='3' skeletonHeight='4' />
                    <SkeletonText noOfLines={1} spacing='3' skeletonHeight='2' />
                </Grid>
                ) : (
                <>
                    <Heading size={{base: 'lg', md: 'md'}} noOfLines={4}>
                        {props.title}
                    </Heading>
                    <Text size={{base: 'xs', md: 'xs'}} noOfLines={1}>
                        {props.channel_name}
                    </Text>
                </>
                )
            }
            </GridItem>
        </Grid>
    )
}

export default Preview;

// const DebugPreview: React.FC = () => {
//     return (
//         <ChakraProvider>
//             <Preview />
//         </ChakraProvider>
//     )
// }

// export default DebugPreview;