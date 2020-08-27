
<template>
  <div class="hello">
    <h1></h1>

    <h2>Vue Demo</h2>

    <div class="container" id="app-demo" style="margin-top: 40px; margin-left:570px">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
          <div class="panel panel-info">
            <div class="panel-heading">
              <button
                type="button"
                class="btn btn-info pull-right"
                data-toggle="modal"
                data-target="#myModal"
              >
                <i class="glyphicon glyphicon-plus"></i>
              </button>
              <form action method="POST" role="form">
                <div class="form-group">
                  <!-- <label for="">Search</label> -->
                  <input
                    type="text"
                    v-model="findvalue"
                    class="form-control"
                    id
                    placeholder="Type content..."
                  />
                </div>
              </form>
            </div>
            <div class="panel-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Loại hàng</th>
                      <th>Name</th>
                      <th>Xuất xứ</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(product,idx) in Searchs" v-bind:key="idx">
                      <td>{{ product.loaihang }}</td>
                      <td>{{ product.name }}</td>
                      <td>{{ product.xuatxu }}</td>
                      <td>
                        <button
                          type="buton"
                          class="btn btn-info"
                          data-toggle="modal"
                          data-target="#myModalu"
                        >
                          <i class="glyphicon glyphicon-pencil"></i>
                        </button>
                        <button
                          type="buton"
                          v-on:click="deleteStudent(product.id)"
                          class="btn btn-danger"
                        >
                          <i class="glyphicon glyphicon-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add product</h4>
          </div>
          <div class="modal-body">
            <form role="form" v-on:submit.prevent="addProduct">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="students.id"
                  required
                  id
                  placeholder="ID..."
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="students.loaihang"
                  required
                  id
                  placeholder="Loại hàng..."
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="students.name"
                  id
                  required
                  placeholder="Name..."
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="students.xuatxu"
                  required
                  id
                  placeholder="Xuất Xứ..."
                />
              </div>
              <button type="submit" class="btn btn-primary">Add</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      findvalue: "",
      products: [],
      listproducts: [],
      students: {
        id: 0,
        loaihang: "",
        name: "",
        xuatxu: "",
      },
    };
  },
  created() {
    fetch("https://localhost:44370/api/TodoItems")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
      console.log('vo mounted');
  },
  computed: {
    Searchs() {
      if (this.findvalue == "") {
        return this.products;
      } else {
        var i;
        this.listproducts = [];
        for (i = 0; i < this.products.length; i++) {
          if (this.products[i].name.match(this.findvalue)) {
            this.listproducts.push(this.products[i]);
          }
        }

        return this.listproducts;
      }
    },
  },
  methods: {
    GetItem() {
      fetch("https://localhost:44370/api/TodoItems")
        .then((response) => response.json())
        .then((data) => {
          this.products = data;
        });
    },
    deleteStudent(id) {
      var uri = "https://localhost:44370/api/TodoItems";
      fetch(`${uri}/${id}`, {
        method: "DELETE",
      })
        .then(() => this.GetItem())
        .catch((error) => console.error("Unable to delete item.", error));
    },
    addProduct() {
      console.log("Vo addproduct");
      const item = {
        id: parseInt(this.students.id),
        name: this.students.name,
        xuatxu: this.students.xuatxu,
        loaihang: this.students.loaihang,
      };
      console.log(item);
      fetch("https://localhost:44370/api/TodoItems", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then(() => {
          this.GetItem();
        })
        .catch((error) => console.error("Unable to add item.", error));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>