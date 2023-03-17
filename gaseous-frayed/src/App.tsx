import { Refine } from "@refinedev/core";
import { Layout, notificationProvider, ErrorComponent } from "@refinedev/antd";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { AntdInferencer } from "@refinedev/inferencer/antd";

import "@refinedev/antd/dist/reset.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider("http://localhost:3006")}
                notificationProvider={notificationProvider}
                resources={[
                    {
                        name: 'cryptos',
                        list: "/cryptos",
                        show: "cryptos/show/:id",
                        create: "cryptos/create",
                        edit: "cryptos/edit/:id",
                        meta: { canDelete: true },
                    },
                ]}
            >
                <Routes>
                    <Route
                        element={(
                            <Layout>
                                <Outlet />
                            </Layout>
                        )}
                    >
                        <Route index element={<NavigateToResource />} />
                        <Route path="cryptos">
                            <Route index element={<AntdInferencer />} />
                            <Route path="show/:id" element={<AntdInferencer />} />
                            <Route path="create" element={<AntdInferencer />} />
                            <Route path="edit/:id" element={<AntdInferencer />} />
                        </Route>
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
            </Refine>
        </BrowserRouter>
    );
};


export default App;

//
// const App: React.FC = () => {
//     return (
//         <BrowserRouter>
//             <Refine
//                 routerProvider={routerProvider}
//                 dataProvider={dataProvider("http://localhost:3006")}
//                 notificationProvider={notificationProvider}
//                 resources={[
//                     {
//                         name: 'Cryptos',
//                         list: "/cryptos",
//                         show: "/cryptos/:id",
//                         create: "/create",
//                         edit: "/update/:id",
//                         meta: { canDelete: true },
//                     },
//                 ]}
//             >
//                 <Routes>
//                     <Route
//                         element={(
//                             <Layout>
//                                 <Outlet />
//                             </Layout>
//                         )}
//                     >
//                         <Route index element={<NavigateToResource />} />
//                         <Route path="crypto">
//                             <Route index element={<AntdInferencer />} />
//                             <Route path="crypto/:id" element={<AntdInferencer />} />
//                             <Route path="create" element={<AntdInferencer />} />
//                             <Route path="update/:id" element={<AntdInferencer />} />
//                         </Route>
//                         <Route path="*" element={<ErrorComponent />} />
//                     </Route>
//                 </Routes>
//             </Refine>
//         </BrowserRouter>
//     );
// };
