import Send from './_apiServiceConfig';

const url = 'blogEntriesPublic';

const BlogEntriesService = {
    GetPage: (page, search, from, to) => Send('get', `${url}/page/${page}/${search || ' '}/${from || ' '}/${to || ' '}/`),
    Get: (id) => Send('get', `${url}/${id}`),
    GetRecents: () => Send('get', `${url}/recents`)
}

export default BlogEntriesService;