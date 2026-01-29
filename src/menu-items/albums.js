// assets
import { ChromeOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const albums = {
  id: 'albums',
  title: 'Home',
  type: 'group',
  children: [
    {
      id: 'Album',
      title: 'Albums',
      type: 'item',
      url: '/',
      icon: icons.ChromeOutlined
    }
  ]
};

export default albums;
