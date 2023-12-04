import { Icon } from '@chakra-ui/react';
import {
  MdDashboard,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';

// Auth Imports
import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  // --- Dashboards ---
  {
    name: '정보체계',
    path: '/junmaster',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: '소재지검색',
        layout: '/junmaster',
        path: '/dashboards/kabbjdsearch',
      },
      {
        name: '사용자정의엑셀업로드',
        layout: '/junmaster',
        path: '/dashboards/ReisUserDefineExcelUpload',
      },
      {
        name: '공동주택가격열람',
        layout: '/junmaster',
        path: '/dashboards/ReisNoticeAptPriceInfo',
      },
      {
        name: '표준지공시지가',
        layout: '/junmaster',
        path: '/dashboards/ReisStandardView',
      },
      {
        name: '개별공시지가',
        layout: '/junmaster',
        path: '/dashboards/ReisIndividualView',
      },
      {
        name: '표준주택가격',
        layout: '/junmaster',
        path: '/dashboards/ReisStandardHPView',
      },
      {
        name: '개별주택가격',
        layout: '/junmaster',
        path: '/dashboards/ReisIndividualHView',
      },
      {
        name: '표준지 가격변동률',
        layout: '/junmaster',
        path: '/dashboards/ReisGshpIndividualRate',
      },
      {
        name: '표준지 지역분석조서',
        layout: '/junmaster',
        path: '/dashboards/ReisGSViewReport',
      },
      {
        name: '지가동향(지가변동률)',
        layout: '/junmaster',
        path: '/dashboards/ReisClpRateView',
      },
      {
        name: '테크',
        layout: '/junmaster',
        path: '/dashboards/ReisTechView',
      },
      {
        name: '지가변동률 계산기',
        layout: '/junmaster',
        path: '/dashboards/ReisLFRRateCalc',
      },
      {
        name: '집합건물 시점수정',
        layout: '/junmaster',
        path: '/dashboards/ReisCalcRate',
      },
    ],
  },
];

export default routes;
