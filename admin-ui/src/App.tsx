import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ErhList } from "./erh/ErhList";
import { ErhCreate } from "./erh/ErhCreate";
import { ErhEdit } from "./erh/ErhEdit";
import { ErhShow } from "./erh/ErhShow";
import { LookupList } from "./lookup/LookupList";
import { LookupCreate } from "./lookup/LookupCreate";
import { LookupEdit } from "./lookup/LookupEdit";
import { LookupShow } from "./lookup/LookupShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { VersionList } from "./version/VersionList";
import { VersionCreate } from "./version/VersionCreate";
import { VersionEdit } from "./version/VersionEdit";
import { VersionShow } from "./version/VersionShow";
import { ApplicationItemList } from "./applicationItem/ApplicationItemList";
import { ApplicationItemCreate } from "./applicationItem/ApplicationItemCreate";
import { ApplicationItemEdit } from "./applicationItem/ApplicationItemEdit";
import { ApplicationItemShow } from "./applicationItem/ApplicationItemShow";
import { DbQueryConnectionList } from "./dbQueryConnection/DbQueryConnectionList";
import { DbQueryConnectionCreate } from "./dbQueryConnection/DbQueryConnectionCreate";
import { DbQueryConnectionEdit } from "./dbQueryConnection/DbQueryConnectionEdit";
import { DbQueryConnectionShow } from "./dbQueryConnection/DbQueryConnectionShow";
import { MappingLogList } from "./mappingLog/MappingLogList";
import { MappingLogCreate } from "./mappingLog/MappingLogCreate";
import { MappingLogEdit } from "./mappingLog/MappingLogEdit";
import { MappingLogShow } from "./mappingLog/MappingLogShow";
import { MappingVarianceList } from "./mappingVariance/MappingVarianceList";
import { MappingVarianceCreate } from "./mappingVariance/MappingVarianceCreate";
import { MappingVarianceEdit } from "./mappingVariance/MappingVarianceEdit";
import { MappingVarianceShow } from "./mappingVariance/MappingVarianceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ERH Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Erh"
          list={ErhList}
          edit={ErhEdit}
          create={ErhCreate}
          show={ErhShow}
        />
        <Resource
          name="Lookup"
          list={LookupList}
          edit={LookupEdit}
          create={LookupCreate}
          show={LookupShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="Version"
          list={VersionList}
          edit={VersionEdit}
          create={VersionCreate}
          show={VersionShow}
        />
        <Resource
          name="ApplicationItem"
          list={ApplicationItemList}
          edit={ApplicationItemEdit}
          create={ApplicationItemCreate}
          show={ApplicationItemShow}
        />
        <Resource
          name="DbQueryConnection"
          list={DbQueryConnectionList}
          edit={DbQueryConnectionEdit}
          create={DbQueryConnectionCreate}
          show={DbQueryConnectionShow}
        />
        <Resource
          name="MappingLog"
          list={MappingLogList}
          edit={MappingLogEdit}
          create={MappingLogCreate}
          show={MappingLogShow}
        />
        <Resource
          name="MappingVariance"
          list={MappingVarianceList}
          edit={MappingVarianceEdit}
          create={MappingVarianceCreate}
          show={MappingVarianceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
