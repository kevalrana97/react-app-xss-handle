import { Api } from 'api';
import InputBox from 'component/common/InputBox';
import { useEffect, useState } from 'react';
import { errorToast, successToast } from 'utils/helper';
import UserValidation from 'validation/UserValidation';
import Loader from 'component/Loader';
import UserList from './List';

const Users = () => {
  const intalFormData = {
    email: '',
    name: '',
    phone: ''
  };
  const [data, setData] = useState([]);
  const [form, setForm] = useState(intalFormData);
  const [error, setError] = useState({});
  const [loader, setLoader] = useState(true);
  const [isEditMode, setEditMode] = useState(false);
  const getUserData = () => {
    setLoader(true);
    setData([]);
    setForm(intalFormData);
    Api.getUserList()
      .then((response) => {
        if (response?.data?.meta?.code === 1) {
          setData(response.data.data);
        } else if (response?.data?.meta?.code === 0) {
          errorToast(response?.data?.meta?.message);
        }
      })
      .finally(() => {
        setLoader(false);
      });
  };

  const deleteData = (id) => {
    setLoader(true);
    Api.deleteUser(id).then((response) => {
      if (response?.data?.meta?.code === 1) {
        successToast(response?.data?.meta?.message);
        getUserData();
      } else if (response?.data?.meta?.code === 0) {
        setLoader(false);
        errorToast(response?.data?.meta?.message);
      }
    });
  };

  const handleChange = (e) => {
    setError((prevState) => ({
      ...prevState,
      [e.target.name]: ''
    }));

    setForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const { errors, isValid } = UserValidation(form);
    if (isValid) {
      const payload = {
        email: form.email,
        phone: form.phone,
        full_name: form.name
      };

      if (form?.id) {
        Api.updateUser(payload, form?.id).then((response) => {
          if (response?.data?.meta?.code === 1) {
            getUserData();
            setForm(intalFormData);
            setEditMode(false);
            successToast(response?.data?.meta?.message);
          } else if (response?.data?.meta?.code === 0) {
            errorToast(response?.data?.meta?.message);
            setLoader(false);
          }
        });
      } else {
        Api.addUser(payload).then((response) => {
          if (response?.data?.meta?.code === 1) {
            getUserData();
            setEditMode(false);
            setForm(intalFormData);
            successToast(response?.data?.meta?.message);
          } else if (response?.data?.meta?.code === 0) {
            errorToast(response?.data?.meta?.message);
            setLoader(false);
          }
        });
      }
    } else {
      setLoader(false);
      setError(errors);
    }
  };

  const editData = (userId) => {
    setLoader(true);
    setForm(intalFormData);
    Api.getUserById(userId)
      .then((response) => {
        if (response?.data?.meta?.code === 1) {
          if (response?.data?.data[0]) {
            /* eslint-disable camelcase */
            const { email, full_name, phone, id } = response.data.data[0];
            setForm({
              email,
              name: full_name,
              phone,
              id
            });
            setEditMode(true);
            /* eslint-enable camelcase */
          }
        } else if (response?.data?.meta?.code === 0) {
          errorToast(response?.data?.meta?.message);
        }
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    if (isEditMode && form?.name === '' && form.email === '' && form.phone === '') {
      setEditMode(false);
      setForm(intalFormData);
    }
  }, [form]);

  useEffect(() => {
    document.title = 'Users';
    getUserData();
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <div className="container-lg p-2">
      <div className="py-2">
        <div className="container border">
          <span className="text-wrap fw-bolder">Contact Us:</span>
          <div className="row">
            <div className="col-12 col-md-3 mb-2">
              <InputBox
                error={error.name}
                name="name"
                id="name"
                defaultValue={form.name}
                placeholder="Enter your name"
                label="Full name"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-3 mb-2">
              <InputBox
                error={error.email}
                name="email"
                id="email"
                defaultValue={form.email}
                placeholder="Enter your email"
                label="Email"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-3 mb-3">
              <InputBox
                error={error.phone}
                name="phone"
                defaultValue={form.phone}
                id="phone"
                placeholder="Enter your phone"
                label="Phone"
                onChange={handleChange}
              />
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-start align-items-center  mb-3">
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                {isEditMode ? 'Update' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container border">
        <UserList data={data} deleteData={deleteData} editData={editData} />
      </div>
    </div>
  );
};

export default Users;
