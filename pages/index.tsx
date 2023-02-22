import { Star } from '#/components/Star';

import { Box, chakra, shouldForwardProp } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { motion, isValidMotionProp } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useMemo, useState } from 'react';

const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Home() {
    const keys = useMemo(() => Array.from(Array(400)).map((_, i) => i), []);
    const [datetime, setDatetime] = useState(dayjs());
    const [now, setNow] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            setDatetime(dayjs());
            setNow(
                datetime.format('YYYY-MM-DD HH:mm:ss')
            );
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [datetime]);
    return (
        <>
            <Head>
                <title>Stars</title>
                <meta
                    name="description"
                    content="Stars"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Box
                background="radial-gradient(ellipse at center 150%, rgb(1,25,50), rgb(1,0,25))"
                h="100vh"
                position="relative"
            >
                {keys.map((key) => (
                    <Star key={key} />
                ))}
                <Box
                    pos="absolute"
                    color="#ECF0EB"
                    textShadow="0px 0px 4px #ECF0EB"
                    bottom="8%"
                    left="50%"
                    transform="translateX(-50%)"
                    mx="auto"
                    fontSize="2xl"
                >
                    {now}
                </Box>
            </Box>
        </>
    );
}
