import React from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  Icon,
  Tooltip,
} from 'antd';

const styles = {
  iconAction: {
    fontSize: 18,
    marginRight: 10,
    cursor: 'pointer',
  },
};


const BasesTableComponent = (props) => {
  const {
    bases,
    showChangeBaseModal,
  } = { ...props };
  const data = bases.map(base => (
    {
      key: base.base_id,
      title: base.title,
      klass: base.klass,
      discipline: base.discipline,
      description: base.description,
      date_create: base.date_create,
      rating: base.rating,
      publik: base.publik,
    }
  ));
  const columns = [{
    title: 'Название',
    dataIndex: 'title',
    render: (text, row) => (
      <Link to={`/user/bases/${row.key}`}>
        {text}
      </Link>
    ),
  }, {
    title: 'Класс',
    dataIndex: 'klass',
  }, {
    title: 'Описание',
    dataIndex: 'description',
  }, {
    title: 'Дата создания',
    dataIndex: 'date_create',
  }, {
    title: 'Рейтинг',
    dataIndex: 'rating',
  }, {
    title: 'Опубликованная',
    dataIndex: 'publik',
    render: (text, row) => (
      <div>
        {row.publik && <Icon type="check" />}
      </div>
    ),
  }, {
    title: 'Действия',
    dataIndex: '',
    key: 'actions',
    render: record => (
      <div>
        <Tooltip title="Редактировать информацию">
          <Icon
            style={styles.iconAction}
            type="edit"
            onClick={() => (showChangeBaseModal(record))
            }
          />
        </Tooltip>
        <Tooltip title="Дублировать базу">
          <Icon style={styles.iconAction} type="copy" />
        </Tooltip>
        {record.publik ? <Icon style={styles.iconAction} type="lock" /> : <Icon style={styles.iconAction} type="unlock" />}
      </div>
    ),
  }];
  return (
    <div>
      <Table columns={columns} dataSource={data} {...props} />
    </div>
  );
};

export default BasesTableComponent;
