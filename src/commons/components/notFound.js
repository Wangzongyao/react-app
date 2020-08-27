import React, { memo } from 'react'
import { Empty } from 'antd'

const NotFound = memo(() => <Empty description={<span>404 not found</span>} />)

export default NotFound
