import {
  Box,
  Flex,
  Icon,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  username?: string;
  updated_at: Date;
  title: string;
  tags: Array<string | null>;
};

export const ArticleCard: FC<Props> = memo((props) => {
  const { username, updated_at, title, tags } = props;
  return (
    <Box
      mx="auto"
      w={{ base: 'full', md: '599px' }}
      minH="164px"
      bg="white"
      borderRadius={8}
      shadow="md"
      justifyContent="center"
      p={5}
      _hover={{ cursor: 'pointer' }}
    >
      <Stack>
        <Flex textAlign="center">
          <Image
            src="https://source.unsplash.com/random"
            boxSize="32px"
            borderRadius="full"
          />
          <Box textAlign="left" pl={2}>
            <Text fontSize="sm">{username}</Text>
            <Text fontSize="xs" color="gray.500">
              {updated_at.toISOString()}
            </Text>
          </Box>
        </Flex>
        <Text ml={10} fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Flex ml={10} justifyContent="space-between">
          <Box>
            <Wrap>
              {tags.map((tag, index) => (
                <WrapItem key={index}>
                  <Text
                    fontSize="sm"
                    bg="gray.200"
                    px={1}
                    borderRadius={3}
                    color="gray.700"
                  >
                    {tag}
                  </Text>
                </WrapItem>
              ))}
            </Wrap>
            <Flex textAlign="center">
              <Icon viewBox="0 0 30 30" color="black" mr={1} pt="3px">
                <path
                  fill="currentColor"
                  d="M 14.1154 28.1838 C 15.103 29.0961 16.8963 29.1091 17.8839 28.2098 L 17.9624 28.1383 C 24.7406 21.9617 29.1759 17.9201 28.9946 12.8825 C 28.9167 10.6668 27.7861 8.54237 25.9538 7.29116 C 23.1657 5.37395 19.8454 5.92832 17.4718 7.64444 C 16.9248 8.03993 16.428 8.49713 15.9996 9 C 15.5711 8.49695 15.0742 8.04006 14.5269 7.64512 C 12.1533 5.93219 8.83337 5.3847 6.04547 7.29116 C 4.21318 8.54237 3.08261 10.6668 3.00464 12.8825 C 2.83571 17.9395 7.29299 21.9929 14.1154 28.1838 Z M 5.00346 12.9511 C 5.06043 11.3482 5.8858 9.82201 7.17333 8.94281 L 7.17442 8.94206 C 9.53222 7.32971 12.6568 8.16 14.4772 10.2969 L 15.3906 11.3693 C 15.7101 11.7443 16.2892 11.7443 16.6086 11.3693 L 17.5221 10.2969 C 19.3469 8.15481 22.4686 7.32185 24.8206 8.93915 L 24.826 8.94281 C 26.1139 9.82233 26.9395 11.3493 26.9959 12.9528 L 26.9959 12.9544 C 27.0625 14.8048 26.3067 16.6196 24.5072 18.858 C 22.6788 21.1323 19.9917 23.5832 16.5374 26.7311 C 16.4848 26.7789 16.3085 26.8783 16.0137 26.8762 C 15.7197 26.8742 15.5349 26.7723 15.4725 26.7147 L 15.466 26.7086 L 15.4594 26.7027 C 12.0064 23.5693 9.32251 21.1243 7.49669 18.8544 C 5.70024 16.621 4.94209 14.8045 5.00346 12.9511 Z"
                />
              </Icon>
              <Text fontSize="sm">10</Text>
            </Flex>
          </Box>
          <Icon width="32px" height="32px" viewBox="0 0 32 32" color="black">
            <path d="M6.5 5H25.5C25.7761 5 26 5.22386 26 5.5V6.5C26 6.77614 25.7761 7 25.5 7H6.5C6.22386 7 6 6.77614 6 6.5V5.5C6 5.22386 6.22386 5 6.5 5ZM24 19V11.5C24 11.3674 23.9473 11.2402 23.8536 11.1464C23.7598 11.0527 23.6326 11 23.5 11H8.5C8.36739 11 8.24021 11.0527 8.14645 11.1464C8.05268 11.2402 8 11.3674 8 11.5V19C8 20.8565 8.7375 22.637 10.0503 23.9497C11.363 25.2625 13.1435 26 15 26H17C18.8565 26 20.637 25.2625 21.9497 23.9497C23.2625 22.637 24 20.8565 24 19ZM6.58579 9.58579C6.96086 9.21071 7.46957 9 8 9H24C24.5304 9 25.0391 9.21071 25.4142 9.58579C25.7893 9.96086 26 10.4696 26 11V19C26 21.3869 25.0518 23.6761 23.364 25.364C21.6761 27.0518 19.3869 28 17 28H15C12.6131 28 10.3239 27.0518 8.63604 25.364C6.94821 23.6761 6 21.3869 6 19V11C6 10.4696 6.21071 9.96086 6.58579 9.58579Z" />
          </Icon>
        </Flex>
      </Stack>
    </Box>
  );
});
