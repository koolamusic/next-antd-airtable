import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Row, Col, Slider, Button, InputNumber } from 'antd'
import { Typography } from 'antd'
import './styles.less'
import MainLayout from '../layouts/main'
import Block from '../layouts/block'

interface ISchema {
    lat?: number,
    lng?: number,
    radius?: number
}
const { Title } = Typography


export default function Home(): JSX.Element {
    const [inputValue, setInputValue] = useState<number>(2);
    const [schema, setSchema] = useState<ISchema>({})
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter()



    const handlePersonalization = (): void => {
        setLoading(true)
        router.push({
            pathname: '/search',
            query: { ...schema }
        })
    }


    const onChange = value => {
        setInputValue(value)
        setSchema(Object.assign(schema, { radius: value * 1000 }))
    };

    return (
        <MainLayout>
            <div style={{ marginTop: '10rem' }}></div>
            <Title>Find a Hospital Near you</Title>

            <Row gutter={2}>
                {/* <h6>How many kilometers far should we search:</h6> */}
                <h6>Tell us how much distance to cover</h6>
                <Col span={24}>
                    {/* <Input placeholder="20 KM" /> */}
                    <Row>
                        <Col md={12} xs={24}>
                            <Slider
                                min={1}
                                max={20}
                                defaultValue={[0, 2]}
                                onChange={onChange}
                                value={typeof inputValue === 'number' ? inputValue : 0}
                            />
                        </Col>
                        <Col md={4} xs={12}>
                            <InputNumber
                                min={1}
                                max={20}
                                style={{ margin: '0 16px 0 5px' }}
                                formatter={value => `${value}KM`}
                                parser={value => value.replace('KM', '')}
                                value={inputValue}
                                onChange={onChange}
                            />
                        </Col>
                        <Col md={6} xs={12}>
                            <Button block onClick={handlePersonalization} loading={loading} type="primary">Search</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* ====== Embed Skeleton Blocks here ==== */}
            <Row justify="space-between" style={{ marginTop: '5rem' }}>
                <Block />
            </Row>
        </MainLayout>
    )
}


