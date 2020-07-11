import React from 'react'
import { Avatar } from 'antd';
import { Card } from 'antd'
import { Row } from 'antd'
import { Skeleton } from 'antd'

const { Meta } = Card;
const CardBlock: React.FC = (): JSX.Element => {
    return (
        <Card
            style={{ minWidth: '17.5rem', margin: '.3rem', boxShadow: "11px 2px 21px rgba(0,0,0,0.031)", cursor: 'pointer' }}
        >
            <Skeleton loading={true} avatar active>
                <Meta
                    avatar={
                        <Avatar src="#" />
                    }
                    title="Hospitals"
                    description="Hospitals Near You"
                />
            </Skeleton>
        </Card>
    );
}

export default function Block(): JSX.Element {
    return (
        <Row>
            <CardBlock />
            <CardBlock />
            <CardBlock />
            <CardBlock />
        </Row>
    )
}