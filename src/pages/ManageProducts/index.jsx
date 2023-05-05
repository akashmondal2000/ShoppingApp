import { Space, Table, Tag } from 'antd';


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
                <a>Invite {record.name}</a>
                <a>Delete</a>
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
        <Table columns={columns} dataSource={data}/>

        </>
    );
}

export default ManageProducts;