import Send from './_apiServiceConfig';

const url = 'announcementsPublic';

const AnnouncementsService = {
    GetAll: () => Send('get', url)
}

export default AnnouncementsService;