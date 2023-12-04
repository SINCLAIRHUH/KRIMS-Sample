'use client';
// Chakra imports
import { Center, Container, Flex, Stack, Tab, TabIndicator, TabList, Tabs, useColorModeValue } from '@chakra-ui/react'
import { TabPanels, TabPanel, Select, Input  } from '@chakra-ui/react'
import { Button, ButtonGroup, Text, Badge } from '@chakra-ui/react'

import {
  MdDashboard,
  MdApps,
  MdOutlineCollections,
  MdFormatPaint,
  MdAccessTime,
  MdOutlineLocalOffer,
} from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';
import { HSeparator } from 'components/separator/Separator';

export default function Page() {
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  return (
    <Container py={{ base: '12', md: '16' }} >
      <Tabs>
        <TabList>
          <Tab>주소</Tab>
          <Tab>도로명주소</Tab>
          <Tab>좌표</Tab>
          <Tab>DSM</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Stack spacing={3}>            
              <Flex>
                <Input placeholder='동이름을 입력하세요' size='md' marginRight={5}/>
                <Button colorScheme='blue'>빠른찾기</Button>
              </Flex>
              <HSeparator />
              <Flex>
                <Select placeholder='서울특별시' marginRight={2}></Select>
                <Select placeholder='중구' marginRight={2}></Select>
                <Select placeholder='신당동' marginRight={2}></Select>
                <Select placeholder='리'></Select>                
              </Flex>
              <Flex>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" width={100} marginRight={5}>지번구분</Text></Center>
                <Select placeholder='1. 일반지번'>
                <option value='option1'>1. 일반지번</option>
                <option value='option2'>2. 산지번</option>
                <option value='option3'>3. 예정지번 (표준)</option>
                <option value='option3'>4. 예정지번 (부번 세분)</option>
                <option value='option3'>5. 블록 (표준형)</option>
                <option value='option3'>6. 블록 (롯트 세분)</option>
                <option value='option3'>7. 블록 (지구지역 표준형)</option>
                <option value='option3'>8. 블록 (지구지역 롯트 세분)</option>
                <option value='option3'>9. 기타</option>
              </Select>                
              </Flex>
              <Flex>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" width={100} marginRight={5}>본번</Text></Center>
                <Input placeholder='본번입력' size='md' marginRight={5}/>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" width={100} marginRight={5}>부번</Text></Center>
                <Input placeholder='부번입력' size='md' marginRight={5}/>
              </Flex>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack spacing={3}>
              <Select placeholder='시도'>
                <option value='option1'>서울특별시</option>
                <option value='option2'>부산광역시</option>
                <option value='option3'>대구광역시</option>
              </Select>
              <Select placeholder='읍면동'>
              </Select>
              <Flex>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" width={100} marginRight={5}>도로명</Text></Center>
                <Input placeholder='도로명입력' size='md' marginRight={5}/>
                <Button colorScheme='blue' width={100}>검색</Button>
              </Flex>
              <Flex>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" width={100} marginRight={5}>건물본번</Text></Center>
                <Input placeholder='건물본번' size='md' marginRight={5}/>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" width={100} marginRight={5}>건물부번</Text></Center>
                <Input placeholder='건물부번' size='md' marginRight={5}/>
              </Flex>              
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack spacing={3}>
              <Flex>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" width={100} marginRight={1}>X 좌표</Text></Center>
                <Input placeholder='' size='md' marginRight={5}/>                
              </Flex>
              <Flex>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" width={100} marginRight={1}>Y 좌표</Text></Center>
                <Input placeholder='' size='md' marginRight={5}/>
                <Button colorScheme='blue' width={100}>확인</Button>
              </Flex>
              <Text color={textColor} fontSize="lg" fontWeight="500" me="12px" marginRight={5}>* 지원가능한 좌표계는 EPSG:5174(수정된 중부원점), EPSG:4326(WGS84, 위경도) 입니다.</Text>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack spacing={3}>
              <Badge variant='solid' colorScheme='green'>경도</Badge>
              <Flex>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" marginRight={5}>도</Text></Center>
                <Input placeholder='' size='md' marginRight={5}/>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" marginRight={5}>분</Text></Center>
                <Input placeholder='' size='md' marginRight={5}/>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" marginRight={5}>초</Text></Center>
                <Input placeholder='' size='md' marginRight={5}/>
              </Flex>

              <Badge variant='solid' colorScheme='red'>위도</Badge>
              <Flex>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" marginRight={5}>도</Text></Center>
                <Input placeholder='' size='md' marginRight={5}/>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" marginRight={5}>분</Text></Center>
                <Input placeholder='' size='md' marginRight={5}/>
                <Center><Text color={textColor} fontSize="lg" fontWeight="500" me="12px" marginRight={5}>초</Text></Center>
                <Input placeholder='' size='md' marginRight={5}/>
              </Flex>
              <Button colorScheme='blue' width={100}>확인</Button>
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
