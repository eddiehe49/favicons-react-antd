import './App.css';
import { Link, Outlet, useLocation } from "react-router-dom"
import { Menu, Layout } from 'antd';
import { DownOutlined } from "@ant-design/icons"
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
      <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home">
            <Link to="/">
              Eddie He's Favicons
            </Link>
          </Menu.Item>
          <SubMenu key="Avatars SubMenu" icon={<DownOutlined />} title="Avatars">
            <Menu.Item key="avatars-react-bootstrap"><a href="https://eddiehe-avatars-darkmode.vercel.app/" rel="noopener noreferrer">DarkMode</a></Menu.Item>
            <Menu.Item key="avatars-vue-element-plus"><a href="https://eddiehe-avatars-lightmode.onrender.com/" rel="noopener noreferrer">LightMode</a></Menu.Item>
            <SubMenu key="avatars-json" title="JSON">
              <Menu.Item key="avatars-jsonlaceholder"><a href="https://my-json-server.typicode.com/eddiehe49/avatars-json/" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a></Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="Favicons SubMenu" icon={<DownOutlined />} title="Favicons">
            <Menu.Item key="favicons-react-mui"><a href="https://eddiehe-favicons.vercel.app/" rel="noopener noreferrer">Auto</a></Menu.Item>
            <Menu.Item key="favicons-react-antd" disabled={useLocation().pathname === "/" ? "true" : null}><Link to="/">DarkMode</Link></Menu.Item>
            <Menu.Item key="favicons-vue-vuetify"><a href="https://eddiehe-favicons-lightmode.onrender.com/" rel="noopener noreferrer">LightMode</a></Menu.Item>
            <SubMenu key="favicons-json" title="JSON">
              <Menu.Item key="favicons-jsonplaceholder"><a href="https://my-json-server.typicode.com/eddiehe49/favicons-json/" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a></Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="about" disabled={useLocation().pathname === "/about" ? "true" : null}>
            <Link to="/about">
              About
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Outlet />
    </div>
  );
}

export default App;
