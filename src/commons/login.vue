<template>
  <!-- 登录 -->
  <div class="login">
    <div class="login_content">
      <!-- logo -->
      <div class="logo">
        <img
          src="https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png"
          alt=""
        />
      </div>
      <!-- 主体 -->
      <div class="login_item">
        <div class="login_form">
          <!-- 点击切换 -->
          <div class="form_title">
            <p
              @click="titleBtn(index)"
              v-for="(i, index) in titleArr"
              :key="index"
              :class="{ back: active == index }"
            >
              {{ i }}
            </p>
          </div>
          <!-- 输入框 -->
          <div class="form_input">
            <!-- 手机 -->
            <div class="form_phone">
              <div class="form_down" v-if="active == 0">
                <div class="down_left">
                  <el-select
                    v-model="selectValue"
                    placeholder="请选择"
                    size="small"
                  >
                    <el-option
                      v-for="item in selectArrr"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div class="down_center">|</div>
                <div class="down_right">
                  <input type="text" placeholder="手机号" />
                </div>
              </div>
            </div>
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
      titleArr: ["免密码登录", "密码登录"], //点击标题
      active: 0,
      selectValue: "",
      selectArrr: [
        { label: "中国 + 86", value: 1 },
        { label: "美国 + 1", value: 2 },
        { label: "日本 + 81", value: 3 },
        { label: "中国香港 + 852", value: 4 },
        { label: "中国澳门 + 853", value: 5 },
        { label: "中国台湾 + 886", value: 6 },
        { label: "马来西亚 + 60", value: 7 },
        { label: "澳大利亚 + 61", value: 8 },
      ],
    };
  },
  created() {
    this.selectValue = this.selectArrr[0].label;
  },
  methods: {
    titleBtn(index) {
      this.active = index;
    },
  },
};
</script>

<style lang='scss' scoped>
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #b8e5f8;
  background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .login_content {
    width: 400px;
    margin: 0 auto;
    .logo {
      width: 128px;
      height: 81px;
      margin: 6% auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .login_item {
      width: 400px;
      height: 497px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      .login_form {
        width: 92%;
        height: 94%;
        border: 1px solid black;
        .form_title {
          display: flex;
          width: 50%;
          height: 60px;
          align-items: center;
          justify-content: space-between;
          p {
            cursor: pointer;
          }
          .back {
            font-weight: 1000;
            border-bottom: 4px solid #0084ff;
            padding: 20px 0;
          }
        }
        .form_input {
          width: 100%;
          border-bottom: 1px solid gray;
          .form_phone {
            width: 100%;
            .form_down {
              display: flex;
              align-items: center;
              height: 48px;
              .down_left {
                .el-select {
                  width: 140px;
                }
              }
              .down_center {
                margin: 0 20px;
                color: rgba(202, 197, 197, 0.685);
              }
              .down_right {
                input {
                  width: 100%;
                  height: 35px;
                  border: none;
                  outline: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>