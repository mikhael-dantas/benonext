import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from "react";
import { TUserInfo } from "src/lib/auth0/auth0";

const Profile = () => {
    const [userInfo, setUserInfo] = useState<TUserInfo>(null);


    useEffect(() => {
        fetch("/api/auth0/get-user", {
            method: "GET"
        }).then((res) => {
            res.json().then((data) => {
                setUserInfo(data);
            })
        }).catch()
    }, []);

    

    return userInfo ? (
        <div className="flex flex-col sm:flex-row p-10">
            <div className="
            sm:w-1/2
            "
            >
                <img style={{
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
                }}
                src={
                    userInfo.picture
                } className="h-64 w-full object-cover rounded-lg mb-4 sm:mb-0"
                alt="avatar"
                crossOrigin=''
                />
            </div>
            <div className="sm:w-1/2 p-4 sm:pl-8">
                <h2 className="text-2xl font-medium">{userInfo.name}</h2>
                <p className="text-gray-600">{userInfo.email}</p>
                <p className="mt-4">{userInfo.nickname}</p>
                <RegistryList userId={userInfo.sub} />
            </div>
        </div>
    ) : ( <></> )
};

export default Profile;







const RegistryList: React.FC<any> = ({
  userId,
}:{
  userId: string
}) => {
  const LOGIN_REGISTRIES_QUERY = gql`
      query GETLOGINREGISTRIES($userId: String!) {
        loginRegistryList(take: 2, skip: 0, user_id: $userId) {
          __typename
          ...on LoginRegistry {
            id,
            user_id,
            created_at
          }
        }
      }`;
  const { loading, error, data } = useQuery(LOGIN_REGISTRIES_QUERY, {
    variables: { userId },
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>registries</h2>
      {data.loginRegistryList.map((registry: any) => (
        <div key={registry.id}>
          <p>
            {registry.user_id} {registry.created_at}
          </p>
        </div>
      ))}
    </div>
  );
};