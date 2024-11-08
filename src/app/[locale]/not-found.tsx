import React from 'react';

import MainLayout from '@/components/layout/main-layout';
import NotFoundView from '@/views/not-found-view';

// Should only appears if the url is wrong an error occured with the locale.
export default function NotFound() {
    return (
        <MainLayout>
            <NotFoundView />
        </MainLayout>
    );
}
