import create from "zustand";
import { persist } from "zustand/middleware";

export const useFavorites = create(
	persist(
		set => ({
			favorites: [],

			addFavorite: favorite => {
				set(state => ({ favorites: [...state.favorites, favorite] }));
			},

			removeFavorite: favorite => {
				set(state => ({
					favorites: state.favorites.filter(item => {
						return item.uid !== favorite.uid;
					})
				}));
			}
		}),
		{
			name: "favorites",
			getStorage: () => localStorage
		}
	)
);
