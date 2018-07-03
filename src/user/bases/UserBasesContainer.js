import React, { Component } from 'react';
import UserBasesComponent from './UserBasesComponent';

const bases = [
  {
    base_id: 'de27352f-6040-4a2a-bc5c-b9317d8f5bde',
    title: 'Base #4',
    klass: '9 klass',
    discipline: null,
    description: null,
    date_create: '2018-06-26',
    rating: 0,
    copi_count: 0,
    premium: false,
    copied: false,
    publik: true,
  },
  {
    base_id: '665c5fd8-c2fb-4a07-aec7-566ef463b4c4',
    title: 'Base #3',
    klass: '9 klass',
    discipline: null,
    description: null,
    date_create: '2018-06-26',
    rating: 0,
    copi_count: 0,
    premium: false,
    copied: false,
    publik: true,
  },
  {
    base_id: 'e402d0c5-29a5-42a7-a73b-972a6df8678d',
    title: 'Base #2',
    klass: '8 klass',
    discipline: null,
    description: null,
    date_create: '2018-06-26',
    rating: 0,
    copi_count: 0,
    premium: false,
    copied: false,
    publik: false,
  },
  {
    base_id: '81804c6e-5b92-41c6-9b3d-c7df0568c982',
    title: 'Test Base # 1',
    klass: '8 klass',
    discipline: 'inf',
    description: 'Desc',
    date_create: '2018-06-04',
    rating: 0,
    copi_count: 0,
    premium: false,
    copied: false,
    publik: true,
  },
];

class UserBases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStyle: 'table',
      modalOpening: '',
      activeBase: null,
    };
  }

  componentDidMount() {
    const { changeActiveSider } = { ...this.props };
    changeActiveSider('userBases');
  }

  changeListStyle = (e) => {
    this.setState({
      listStyle: e.target.value,
    });
  };

  showChangeBaseModal = (base) => {
    this.setState({
      activeBase: base,
      modalOpening: 'changeBase',
    });
  };

  showAddBaseModal = () => {
    this.setState({
      modalOpening: 'addBase',
    });
  };

  handleAddBase = (values) => {
    console.log(values);
  };

  handleChangeBase = (values) => {
    console.log(values);
  };

  closeModal = () => {
    this.setState({
      modalOpening: '',
    });
  }

  render() {
    return (
      <UserBasesComponent
        {...this.state}
        bases={bases}
        changeListStyle={this.changeListStyle}
        showAddBaseModal={this.showAddBaseModal}
        showChangeBaseModal={this.showChangeBaseModal}
        handleAdd={this.handleAddBase}
        handleChange={this.handleChangeBase}
        closeModal={this.closeModal}
      />
    );
  }
}


export default UserBases;
