import classes from './ArticleLists.module.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Card, Col, Row } from 'antd';


const getArticels = async () => {
    const response = await axios.get('http://localhost:8080/article');
    return response;
  };

const ArticleLists = () => {
    const { data, status, error } = useQuery('articles', getArticels, {
      });
   
      return (
        <Row style={{width: "100%"}} gutter={[24, 24]}>
          {status == 'success' && data.data.map((article) => (
              <Col span={8}>
             <Card title={article.title} bordered={false}>
              {article.body}
            </Card>
          </Col>
          ))}
        </Row>
      )
}

export default ArticleLists;