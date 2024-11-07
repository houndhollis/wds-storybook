import DefaultTextFiled from "./components/DefaultTextField";
import Label from "./components/Label";

function App() {
  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextFiled
        errorMessage="이메일을 입력해주세요."
        iconAlt="삭제 이미지"
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        id="email"
        isError={true}
        onChange={() => {}}
        onIconClick={() => {}}
        placeholder="이메일"
        type="text"
        value=""
      />

      <br />
      <Label htmlFor="email">이메일</Label>
      <DefaultTextFiled
        errorMessage="이메일을 입력해주세요."
        iconAlt="삭제 이미지"
        iconPath="https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg"
        id="email"
        isError={true}
        onChange={() => {}}
        onIconClick={() => {}}
        placeholder="이메일"
        type="text"
        value=""
      />
    </>
  );
}

export default App;
