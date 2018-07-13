import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'antd';


const SuccessPage = props => (
  <div className="result">
    <div className="icon">
      <Icon className="success" type="check-circle" />
    </div>
    <div className="title">
      { props.title }
    </div>
    <div className="extra">
      {props.description}
      {props.buttons ? (
        <div>
          <Button>
            <Link to="/user/profile" className="action-button">
              <Icon type="user" /> Панель управления
            </Link>
          </Button>
          <Button>
            <Link to="/" className="action-button">
              <Icon type="home" /> Главная
            </Link>
          </Button>
        </div>)
        : ''
      }
    </div>
  </div>
);

SuccessPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SuccessPage;
