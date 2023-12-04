'use client';
// Chakra imports
import { Center, Container, Flex, Stack, Tab, TabIndicator, TabList, Tabs, useColorModeValue } from '@chakra-ui/react'
import { TabPanels, TabPanel, Select, Input  } from '@chakra-ui/react'
import { IconButton, Button, ButtonGroup, Text, Badge } from '@chakra-ui/react'

import {
  MdDashboard,
  MdApps,
  MdOutlineCollections,
  MdFormatPaint,
  MdAccessTime,
  MdOutlineLocalOffer,
  MdBuild,
} from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FaCheck, FaSearch } from 'react-icons/fa';
import { FaPaintbrush } from "react-icons/fa6";
import { HSeparator } from 'components/separator/Separator';

import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function Page() {
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  const [rowData] = useState<any[]>([
    { year: "2023", localcode: "11680", sido: "서울특별시", gungu: "강남구", EMD: "개포동", jibun: "86", area: "1395", jimok: "답", usestatus: "전", youngdo:"자연녹지", jisae: "평지", jiga: "1,331,000", address: "개포프레지던트자이" },
    { year: "2023", localcode: "11680", sido: "서울특별시", gungu: "강남구", EMD: "개포동", jibun: "86", area: "1395", jimok: "답", usestatus: "전", youngdo:"자연녹지", jisae: "평지", jiga: "1,331,000", address: "개포프레지던트자이" },
    { year: "2023", localcode: "11680", sido: "서울특별시", gungu: "강남구", EMD: "개포동", jibun: "86", area: "1395", jimok: "답", usestatus: "전", youngdo:"자연녹지", jisae: "평지", jiga: "1,331,000", address: "개포프레지던트자이" },
    { year: "2023", localcode: "11680", sido: "서울특별시", gungu: "강남구", EMD: "개포동", jibun: "86", area: "1395", jimok: "답", usestatus: "전", youngdo:"자연녹지", jisae: "평지", jiga: "1,331,000", address: "개포프레지던트자이" },
    { year: "2023", localcode: "11680", sido: "서울특별시", gungu: "강남구", EMD: "개포동", jibun: "86", area: "1395", jimok: "답", usestatus: "전", youngdo:"자연녹지", jisae: "평지", jiga: "1,331,000", address: "개포프레지던트자이" },
    { year: "2023", localcode: "11680", sido: "서울특별시", gungu: "강남구", EMD: "개포동", jibun: "86", area: "1395", jimok: "답", usestatus: "전", youngdo:"자연녹지", jisae: "평지", jiga: "1,331,000", address: "개포프레지던트자이" }
  ]);

  const [columnDefs] = useState<ColDef[]>([
    { field: "year" },
    { field: "localcode" },
    { field: "serial" },
    { field: "sido" },
    { field: "gungu" },
    { field: "EMD" },
    { field: "jibun" },
    { field: "area" },
    { field: "jimok" },
    { field: "usestatus" },
    { field: "youngdo" },
    { field: "jisae" },
    { field: "jiga" },
    { field: "address" }
  ]);

  const [danjiData] = useState<any[]>([
    { dangi_name:"샘마을임광", jibun: "1115" },
    { dangi_name:"샘마을대우", jibun: "1121" },
    { dangi_name:"샘마을우방", jibun: "1116" },
    { dangi_name:"샘마을한양", jibun: "1121" },
    { dangi_name:"샘마을쌍용", jibun: "1117" }    
  ]);

  const [dangiColumnDefs] = useState<ColDef[]>([
    { field: "dangi_name" },
    { field: "jibun" }
  ]);  

  return (
    <Container py={{ base: '12', md: '32' }} maxW='1024px'>
      <Stack spacing={3}>
        <Flex>
          <Badge variant='solid' colorScheme='green' maxW='md'>지역선택</Badge>        
        </Flex>
        <HSeparator />
        <Tabs>
          <TabList>
            <Tab>지번검색</Tab>
            <Tab>도로명검색</Tab>
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
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack spacing={3}>
                <Flex>
                  <Input placeholder='도로이름을 입력하세요' size='md' marginRight={5}/>
                  <Button colorScheme='blue'>빠른찾기</Button>
                </Flex>
                <HSeparator />
                <Flex>
                  <Select placeholder='선택하세요' marginRight={2}></Select>
                  <Select placeholder='' marginRight={2}></Select>
                  <Select placeholder='' marginRight={2}></Select>
                  <Select placeholder=''></Select>                
                </Flex>
              </Stack>
            </TabPanel>            
          </TabPanels>
        </Tabs>

        <Flex>
          <Badge variant='solid' colorScheme='red' maxW='md'>단지조회</Badge>        
        </Flex>
        <HSeparator />
        <Flex>
          <Center><Text color={textColor} fontSize="md" fontWeight="500" me="12px" width='70px'>검색조건</Text></Center>
          <Select placeholder='지번' marginRight={2}></Select>
        </Flex>
        <Flex>
          <Center><Text color={textColor} fontSize="md" fontWeight="500" me="12px" width='70px'>건물번호</Text></Center>
          <Input placeholder='' marginRight={5} width='100px'/>
          <Center><Text color={textColor} fontSize="md" fontWeight="500" me="12px" marginRight={5}>-</Text></Center>
          <Input placeholder='' marginRight={5} width='100px'/>
          <Button leftIcon={<FaSearch />} colorScheme='pink' variant='solid'  marginRight={5}>단지검색</Button>
          <Button leftIcon={<FaCheck />} colorScheme='yellow' variant='solid'  marginRight={5}>초기화</Button>
        </Flex>

        <div className="ag-theme-alpine" style={{ height: 350, width: '100%', marginTop: "30px" }}>
          <AgGridReact rowData={danjiData} columnDefs={dangiColumnDefs} />
        </div>                

        <Flex>
          <Badge variant='solid' colorScheme='yellow' maxW='md'>동/호 선택</Badge>        
        </Flex>
        <HSeparator />
        <Flex>
          <Center><Text color={textColor} fontSize="md" fontWeight="500" me="12px" width='20px'>동</Text></Center>
          <Select placeholder='' marginRight={2} width='150px'></Select>
          <Center><Text color={textColor} fontSize="md" fontWeight="500" me="12px" width='20px'>호</Text></Center>
          <Select placeholder='' marginRight={2} width='150px'></Select>
          <Button leftIcon={<FaSearch />} colorScheme='blackAlpha' variant='solid'  marginRight={5}>공시가격열람</Button>
          <Button leftIcon={<FaPaintbrush />} colorScheme='purple' variant='solid'  marginRight={5}>채색하기</Button>          
        </Flex>

        <div className="ag-theme-alpine" style={{ height: 350, width: '100%', marginTop: "30px" }}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>        

      </Stack>
    </Container>
  );
}
