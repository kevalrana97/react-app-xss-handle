const UserList = (props) => {
  const { data, deleteData, editData } = props;

  let index = 0;

  return (
    <div className="container">
      <div className="row">
        <div className="col p-0">
          <span className="text-wrap fw-bolder">Contact us List</span>
        </div>
      </div>

      <div className="row">
        <div className="col p-0">
          <div className="table-responsive-md">
            <table className="table table-bordered mt-2">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Full name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((element) => {
                    index += 1;
                    return (
                      <tr key={element.id}>
                        <td>{index}</td>
                        <td>{element?.full_name ?? '-'}</td>
                        <td>{element?.email ?? '-'}</td>
                        <td>{element?.phone ?? '-'}</td>
                        <td>
                          <div className="d-flex">
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={() => editData(element?.id)}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-danger  mx-2"
                              onClick={() => deleteData(element?.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
