import React from 'react';

import Layout from './(main)/layout';

const NotFound: React.FC = async () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center">
                <h2>Oops! Something went wrong!</h2>
            </div>
        </Layout>
    );
};

export default NotFound;
