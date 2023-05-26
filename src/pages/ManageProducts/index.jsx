import { Space, Table, Button, Typography } from 'antd';
import {DeleteOutlined , EditOutlined} from "@ant-design/icons";
import styles from "./ManageProducts.module.css";

import {ManageProductsAddEditModal} from "../../components"; 



const { Title } = Typography;// for add a heading or title of page in antDesign


const ManageProducts = () =>{


    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
                <EditOutlined />
                <DeleteOutlined />
              </Space>
            ),
          },
    
    ];

    const data = [
        {
          key: '1',
          name: 'John Brown',
          price: 32,
         
        },
        {
          key: '2',
          name: 'Jim Green',
          price: 42,
         
        },
        {
          key: '3',
          name: 'Joe Black',
          price: 32,
         
        },
      ];

    return(
        <>
        <div className={styles.mainContainer}>
          {/* Top Header*/}
          <div className={styles.topHeader}>
            <Title level={3}> Manage Products</Title>
              <Button type="primary"
              onClick={()=>{
                console.log("button clicked")
              }}
              >
              Add a Product
              </Button>
          </div>


          {/* product list table */}
          <Table columns={columns} dataSource={data}/>

        </div>

        </>
    );
}

export default ManageProducts;