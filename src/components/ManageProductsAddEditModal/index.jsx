import { Modal, Button, Form, Input,InputNumber, message } from 'antd';

const ManageProductsAddEditForm =({
    isEdit = false,
    isVisible = false,
    onCancel = ()=>{},
    selectedProduct = null,
    onSubmit = () =>{}
})=>{

    return(
        <Modal
            title = {`${isEdit? "Edit":"Add" } Product`}
            open = {isVisible}
            onCancel={onCancel}
            footer={null}
        >
        <Form 
            name="productAddEditForm"
            onFinish={(val)=>{
                console.log("Submitted Form data", val);
                onsubmit(val);
            }}

            onFinishFailed={(value)=>{}}
            autoComplete="off"
            initialValues={
                selectedProduct?
                {
                    name:selectedProduct.name,
                    price:selectedProduct.price
                }
                :null
            }            
        >

        {/*this is for product name */}
        <Form.Item
        label="Product Name"
        name= "name"
        rules={[
            {
                required:true,
                message:"Please input your product name"
            }
        ]}
        >
        <Input/>
        </Form.Item>

        {/*This is for item price */}

        <Form.Item
        label="Price"
        name="Price"
        rules={[
            {
                required:true,
                message :"Please input product price"
            }
        ]}
        >
        <InputNumber style={{width : "418px"}} prefix={"$ "}/>
        </Form.Item>

        <Form.Item
        wrapperCol={{
        offset: 10,
        span: 16,
      }}
        >

            <Button type="primary" htmlType="submit">
            Submit
            </Button>
            </Form.Item>
        </Form>    
        </Modal>
    );
}


export default ManageProductsAddEditForm;