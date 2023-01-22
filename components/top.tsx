import { useFetchHooks, useSelectLanguageHooks, useSelectTypeHooks } from '../hooks/customhooks'
import { H1, H2, MethodTitle } from '../styled-components/text-style'
import { LinkLargeButton, LinkButton, GreyButton, BlueButton } from '../styled-components/button'
import SelectOneMethodRouter from './SelectOneMethodRouter'
import { FormLabel } from '../styled-components/form-parts'
import { Grid, FlexButton } from '../styled-components/flexible'
import { SearchFormSpacer, InputSpacer } from '../styled-components/spacer'
import { useFormsContext } from '../context/FormContext'


const Method = () => { 

  // 初期メソッドデータの取得フック
  const { methods, setMethods } = useFetchHooks();

  // セレクトボックスの言語取得フック
  const { languages } = useSelectLanguageHooks();

  // セレクトボックスの型取得フック
  const { types } = useSelectTypeHooks();

  // form用state
  const { states, setStates } = useFormsContext();

  const {language, methodName, type, description, keyword1, keyword2, keyword3,} = states;

  const{setLanguage, setMethodName, setType, setDescription, setKeyword1, setKeyword2, setKeyword3,} = setStates;

  // input入力リセットメソッド
  const reset = () => {
    setLanguage("")
    setMethodName("");
    setType("");
    setKeyword1("");
    setKeyword2("");
    setKeyword3("");
    setDescription("");
}

  // 削除メソッド
  const deleteMethod = (id: number) => {

    let DELETE_URL = `http://localhost:8080/delete/${id}`;

    fetch(DELETE_URL,{ method: "GET"})
    .then((res) => {
      if(!res.ok) {
          console.error('response.ok:', res.ok);
          console.error('response.status:', res.status);
          console.error('response.statusText:', res.statusText);
      }else {
          res.json()
          .then((data) => setMethods(data));
      }
    })
      .catch(error => {
        console.log("エラーが発生しました", error);
    })
  }

  // 検索メソッド
  const searchMethod = () => {

    const SEARCH_URL = "http://localhost:8080/method";

    const request = {
      language,
      methodName,
      type,
      description,
      keyword1,
      keyword2,
      keyword3,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // 'X-XSRF-TOKEN': xsrf,
      body: JSON.stringify(request),
    };

    fetch(SEARCH_URL, requestOptions)
    .then((res) => {
      if(!res.ok) {
          console.error('response.ok:', res.ok);
          console.error('response.status:', res.status);
          console.error('response.statusText:', res.statusText);
      }else {
          res.json()
          .then((data) => setMethods(data));
      }
      reset();
    })
      .catch(error => {
        console.log("エラーが発生しました", error);
    })
  }

  return (
   <>
   {/* タイトル */}
   <H1 color="#0EA5E9">- Method Dictionary -</H1>

    {/* サブタイトル */}
    <h3 style={{ textAlign: "center" }}>Hello. Please find the methods you want to use.</h3>

    {/* メソッド追加ページ遷移ボタン */}
    <div style={{ padding: "50px 0 80px 0" }}>
      <LinkLargeButton href="/add">Insert new Method</LinkLargeButton>
    </div>

    {/* 検索フォーム */}
    <SearchFormSpacer>
      {/* 言語選択セレクトボックス */}
      <InputSpacer rows='1' columns='1'>
        <FormLabel>Language</FormLabel><br />
        <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="">Please choose an option</option>
          {
            languages.map((language) => {
              return(
                <option key={language} value={language}>{language}</option>
              )
            })
          }
        </select>
      </InputSpacer>

      {/* メソッド名付検索 */}
      <InputSpacer rows='1' columns='2'>
        <FormLabel>Method Name</FormLabel><br />
        <input type="text" onChange={(e) => setMethodName(e.target.value)}></input>
      </InputSpacer>

      {/* Type検索 */}
      {/* 型選択セレクトボックス */}
      <InputSpacer rows='1' columns='3'>
        <FormLabel>Type</FormLabel><br />
        <select onChange={(e) => setType(e.target.value)}>
        <option value="">Please choose an option</option>
          {
            types.map((type) => {
              return(
                <option key={type} value={type}>{type}</option>
              )
            })
          }
        </select>
      </InputSpacer>

      {/* Keyword1検索 */}
      <InputSpacer rows='2' columns='1'>
        <FormLabel>Keyword1</FormLabel><br />
        <input type="text" onChange={(e) => setKeyword1(e.target.value)}></input>
      </InputSpacer>

      {/* Keyword2検索 */}
      <InputSpacer  rows='2' columns='2'>
        <FormLabel>Keyword2</FormLabel><br />
        <input type="text" onChange={(e) => setKeyword2(e.target.value)}></input>
      </InputSpacer>

      {/* Keyword3検索 */}
      <InputSpacer rows='2' columns='3'>
        <FormLabel>Keyword3</FormLabel><br />
        <input type="text" onChange={(e) => setKeyword3(e.target.value)}></input>
      </InputSpacer>

      {/* 検索ボタン */}
      <InputSpacer rows='1/3' columns='4/5'>
        <BlueButton onClick={searchMethod}>Search</BlueButton>
      </InputSpacer>
    </SearchFormSpacer>

    {/* メソッド一覧表示 */}
   {
    methods.map((method) => {
      return (
        <Grid key={method.id}>
          <MethodTitle>{ method.language}</MethodTitle>
          <div>
            <H2 color="#F472B6">【 { method.methodName } 】</H2>
            <p color="white">{ method.description}</p>
          </div>
          <FlexButton>

            {/* 詳細ページ遷移ボタン */}
            <SelectOneMethodRouter url="/details" id={method.id}>Details</SelectOneMethodRouter>

            {/* 編集ページ遷移ボタン */}
            <SelectOneMethodRouter url="edit" id={method.id}>Edit</SelectOneMethodRouter>

            {/* メソッド削除ボタン */}
            <GreyButton onClick={() => deleteMethod(method.id)}>Delete</GreyButton>

          </FlexButton>
        </Grid>
      )
    })
   }
   </>
  )
}

export default Method;