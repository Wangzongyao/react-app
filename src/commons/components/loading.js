import React, { memo } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const Loading = memo(() => <Spin indicator={<LoadingOutlined spin />} tip="Loading..." />)

export default Loading
