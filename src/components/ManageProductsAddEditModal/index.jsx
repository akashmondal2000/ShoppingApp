import { Modal, Button, Form, Input,InputNumber } from 'antd';

const ManageProductsAddEditForm =({
    isEdit = false,
    isVisible = false,
    onCancel = ()=>{},
})=>{

    return(
        <Modal
            title = {`${isEdit? "Edit":"Add" } Product`}
            open = {isVisible}
            onCancel={onCancel}
            footer={null}
        >

            <Button type="primary" htmlType="submit">
            Submit
            </Button>

        </Modal>
    );
}


export default ManageProductsAddEditForm;