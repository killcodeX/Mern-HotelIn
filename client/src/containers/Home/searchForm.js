import React from "react";
import { FormWrapper } from "./homestyle";
import { Button } from 'antd';

export default function searchForm() {
  return (
    <FormWrapper>
      <Button
        type="primary"
        htmlType="submit"
        size="large"
      >
        Find Hotels
      </Button>
    </FormWrapper>
  );
}
