import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useMemo } from 'react';

const MotionBox = chakra(motion.div, {
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const Star = () => {
    const x = useMemo(() => Math.random() * 100, []);
    const y = useMemo(() => Math.random() * 75, []);
    const delay = useMemo(() => Math.random() * 4, []);
    const scale1 = useMemo(() => Math.random(), []);
    const scale2 = useMemo(() => 0.1 + Math.random(), []);
    return (
        <MotionBox
            display="inline-block"
            position="absolute"
            left={`${x}%`}
            top={`${y}%`}
            textShadow="0px 0px 10px #ECF0EB"
            animate={{
                color: [
                    '#A0D468',
                    '#4FC1E9',
                    '#FFCE54',
                    '#FC6E51',
                    '#ED5565',
                    '#AC92EC',
                ],
                scale: [scale1, scale2],
            }}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            transition={{
                duration: 3.6,
                delay: delay,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse',
            }}
            fontSize="3px"
        >
            ★
        </MotionBox>
    );
};
