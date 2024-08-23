import './SearchResource.css'

export type Campus = 'CUNY' | 'HUNT' | 'BRCH' | 'BKLN' | 'CSTI' | 'JJAY' | 'LMAN' | 'MDEV' | 'NYCT' | 'QNSC' | 'CCNY' | 'YORK';

export type Resource = {
    name: string,
    description: string,
    campus: Campus,
    website: string,
}

const SearchResult = ({ resource }: { resource: Resource }) => {

    console.log(resource)

    return (
        <div className="resource-container">
            <div>
                <span className="resource-title">{resource.name}</span>
                {/*<span>{resource.campus}</span>*/}
            </div>

            <a href={resource.website}>{resource.website}</a>
            <p className="resource-description">{resource.description}</p>
        </div>
    );
};

export default SearchResult;