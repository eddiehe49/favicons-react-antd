import './App.css';
import { Link, Outlet, useLocation } from "react-router-dom"
import { useState, createContext } from "react";
import { Menu, Layout, Modal, Image, Button } from 'antd';
import { DownOutlined } from "@ant-design/icons"
import 'antd/dist/antd.dark.css';
// import 'antd/dist/antd.css';

const { SubMenu } = Menu;
export const modal = createContext()
const items = [
  {
    label: (<Link to="/">Eddie's Favicons</Link>),
    key: 'home',
  },
  {
    label: 'Profile Pictures',
    key: 'Profile Pictures SubMenu',
    icon: <DownOutlined />,
    children: [
      {
        label: (
          <a href="https://eddiehe-profile-picturess-darkmode.vercel.app/" rel="noopener noreferrer">DarkMode</a>
        ),
        key: 'profile-pictures-react-bootstrap',
      },
      {
        label: (
          <a href="https://eddiehe-profile-pictures-lightmode.onrender.com/" rel="noopener noreferrer">LightMode</a>
        ),
        key: 'profile-pictures-vue-element-plus',
      },
      {
        label: 'JSON',
        key: 'profile-pictures-json',
        children: [
          {
            label: (
              <a href="https://my-json-server.typicode.com/eddiehe49/profile-pictures/" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a>
            ),
            key: 'profile-pictures-jsonlaceholder',
          },
        ],
      },
    ],
  },
  {
    label: 'Favicons',
    key: 'Favicons SubMenu',
    icon: <DownOutlined />,
    children: [
      {
        label: (
          <a href="https://eddiehe-favicons.vercel.app/" rel="noopener noreferrer">Auto</a>
        ),
        key: 'favicons-react-mui',
      },
      {
        label: (
          <Link to="/">DarkMode</Link>
        ),
        key: 'favicons-react-antd',
      },
      {
        label: (
          <a href="https://eddiehe-favicons-lightmode.onrender.com/" rel="noopener noreferrer">LightMode</a>
        ),
        key: 'favicons-vue-vuetify',
      },
      {
        label: 'JSON',
        key: 'favicons-json',
        children: [
          {
            label: (
              <a href="https://my-json-server.typicode.com/eddiehe49/favicons/" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a>
            ),
            key: 'favicons-jsonplaceholder',
          },
        ],
      },
    ],
  },
  {
    label: (<Link to="/about">About</Link>),
    key: 'about',
  },
];

function App() {
  const [faviconsIntroductionModalVisible, setFaviconsIntroductionModalVisible] = useState(true);
  const [current, setCurrent] = useState('home');

  const onClick = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };

  const info = () => {
    setFaviconsIntroductionModalVisible(false)
    Modal.info({
      title: 'Tips',
      centered: true,
      content: (
        <ul>
          <li><span style={{ fontSize: "medium", fontWeight: "bold" }}>There is a like button.</span><br />Give your preferred favicon a thumb up!</li>
          <br />
          <li><span style={{ fontSize: "medium", fontWeight: "bold" }}>Scroll down!</span><br />Have fun in the comment section. </li>
        </ul>
      ),
      onOk() { },
    });
  }

  return (
    <modal.Provider value={{ setFaviconsIntroductionModalVisible }}>
      <div className="App">
        {/* <Layout.Header style={{ zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home">
              <Link to="/">
                Eddie's Favicons
              </Link>
            </Menu.Item>
            <SubMenu key="Avatars SubMenu" icon={<DownOutlined />} title="Profile Pictures">
              <Menu.Item key="profile-pictures-react-bootstrap"><a href="https://eddiehe-profile-picturess-darkmode.vercel.app/" rel="noopener noreferrer">DarkMode</a></Menu.Item>
              <Menu.Item key="profile-pictures-vue-element-plus"><a href="https://eddiehe-profile-pictures-lightmode.onrender.com/" rel="noopener noreferrer">LightMode</a></Menu.Item>
              <SubMenu key="profile-pictures-json" title="JSON">
                <Menu.Item key="profile-pictures-jsonlaceholder"><a href="https://my-json-server.typicode.com/eddiehe49/profile-pictures/" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a></Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="Favicons SubMenu" icon={<DownOutlined />} title="Favicons">
              <Menu.Item key="favicons-react-mui"><a href="https://eddiehe-favicons.vercel.app/" rel="noopener noreferrer">Auto</a></Menu.Item>
              <Menu.Item key="favicons-react-antd" disabled={useLocation().pathname === "/" ? true : null}><Link to="/">DarkMode</Link></Menu.Item>
              <Menu.Item key="favicons-vue-vuetify"><a href="https://eddiehe-favicons-lightmode.onrender.com/" rel="noopener noreferrer">LightMode</a></Menu.Item>
              <SubMenu key="favicons-json" title="JSON">
                <Menu.Item key="favicons-jsonplaceholder"><a href="https://my-json-server.typicode.com/eddiehe49/favicons/" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a></Menu.Item>
              </SubMenu>
            </SubMenu>
            <Menu.Item key="about" disabled={useLocation().pathname === "/about" ? true : null}>
              <Link to="/about">
                About
              </Link>
            </Menu.Item>
          </Menu>
        </Layout.Header> */}
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        <Outlet />
        <Modal
          title="What are favicons?"
          centered
          visible={faviconsIntroductionModalVisible}
          width={650}
          closable={false}
          footer={[
            <Button key="Close" type="" onClick={() => { setFaviconsIntroductionModalVisible(false) }}>
              Close
            </Button>,
            <Button key="OK" type="primary" onClick={info}>
              OK
            </Button>
          ]}
        >
          <Image
            src="faviconsIntroduction.jpg"
          />
        </Modal>
      </div>
    </modal.Provider>
  );
}

export default App;
