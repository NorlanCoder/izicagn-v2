# 📋 Rapport des routes API manquantes — izicagn v2

## 🌐 PAGES PUBLIQUES

### 1. Page d'accueil — `/`
| Données statiques | Route suggérée |
|---|---|
| Cagnottes en vedette | `GET /api/v1/pots/featured?limit=6` |
| Articles en vedette | `GET /api/v1/articles/featured?limit=3` |
| Statistiques globales plateforme | `GET /api/v1/stats/platform` |
| Témoignages/avis utilisateurs | `GET /api/v1/testimonials?limit=6` |

### 2. Toutes les cagnottes — `/cagnotte`
| Données statiques | Route suggérée |
|---|---|
| Liste de catégories (CategoryList depuis utils/data) | `GET /api/v1/categories` |
| Cagnottes personnelles | ✅ `GET /api/v1/pots?type=personal` |
| Cagnottes communautaires | ✅ `GET /api/v1/pots?type=community` |

### 3. Cagnottes par catégorie — `/cagnotte/:category`
| Données statiques | Route suggérée |
|---|---|
| Liste des cagnottes filtrées (mockées) | `GET /api/v1/pots?categoryId=:id&page=:p&limit=20` |
| Titre de la catégorie + nombre total | `GET /api/v1/categories/:slug` |

### 4. Détail d'une cagnotte — `/cagnotte/details/:id`
| Données statiques | Route suggérée |
|---|---|
| Détail de la cagnotte | ✅ `GET /api/v1/pots/:id` |
| Dons/contreparties | ✅ `GET /api/v1/pots/:id/gifts?page=1&limit=5` |
| Cagnottes similaires | `GET /api/v1/pots/:id/related?limit=3` |

### 5. Recherche — `/recherche`
| Données statiques | Route suggérée |
|---|---|
| Résultats (mockés) | `GET /api/v1/pots/search?q=:query&page=1&limit=12` |
| Filtres dynamiques (catégories) | `GET /api/v1/categories` |

### 6. Page de paiement — `/cagnotte/paiement`
Tout est déjà connecté ✅

### 7. Page de succès paiement — `/cagnotte/paiement/success`
| Données statiques | Route suggérée |
|---|---|
| Récapitulatif du don (tout hardcodé) | `GET /api/v1/gift/:giftId` |
| Statut de la transaction | `GET /api/v1/gift/:reference/status` |

### 8. Articles — `/articles`
| Données statiques | Route suggérée |
|---|---|
| Liste des articles (6 hardcodés) | `GET /api/v1/articles?page=1&limit=9` |
| Recherche d'articles | `GET /api/v1/articles?q=:query` |

### 9. Détail d'un article — `/articles/:id`
| Données statiques | Route suggérée |
|---|---|
| Contenu complet (lorem ipsum) | `GET /api/v1/articles/:id` |
| Nombre d'applaudissements (100 hardcodé) | `GET /api/v1/articles/:id/claps` |
| Ajouter un applaudissement | `POST /api/v1/articles/:id/clap` |

### 10. Tarifs — `/tarifs`
| Données statiques | Route suggérée |
|---|---|
| Taux de frais par pays/service (5% hardcodé) | `GET /api/v1/fees?country=:code&service=:type` |

### 11. Levée de fonds — `/leverdesfonds`
| Données statiques | Route suggérée |
|---|---|
| FAQ (5 questions hardcodées) | `GET /api/v1/faq?category=fundraising` |
| Pays couverts | `GET /api/v1/countries/all?feature=fundraising` |
| Catégories de projets | `GET /api/v1/categories?type=fundraising` |

### 12. Investissement — `/investissement`
| Données statiques | Route suggérée |
|---|---|
| Projets sélectionnés pour vous (mockés) | `GET /api/v1/pots?type=investment&recommended=true&limit=6` |
| Projets près de chez vous | `GET /api/v1/pots?type=investment&country=:code&limit=6` |

---

## 🔐 AUTHENTIFICATION

### 13. Login — `/login`
| Données statiques | Route suggérée |
|---|---|
| Codes pays hardcodés | `GET /api/v1/countries/all` (filtrer par prefix) |
| Login | ✅ `POST /api/v1/auth/login` |

### 14. Inscription — `/signup`
| Données statiques | Route suggérée |
|---|---|
| Codes pays hardcodés | `GET /api/v1/countries/all` |
| Création compte | ✅ `POST /api/v1/auth/register` |
| Validation OTP | ✅ `POST /api/v1/auth/validate-otp` |

### 15. Mot de passe oublié — `/forgot-password`
| Données statiques | Route suggérée |
|---|---|
| Codes pays hardcodés | `GET /api/v1/countries/all` |
| Demande reset | ✅ `POST /api/v1/auth/ask-reset` |
| Validation OTP reset | ✅ `POST /api/v1/auth/validate-reset-otp` |
| Définir nouveau mot de passe | ✅ `POST /api/v1/auth/define-password` |

---

## 📊 DASHBOARD

### 16. Accueil dashboard — `/dashboard`
| Données statiques | Route suggérée |
|---|---|
| Stats du mois (dons, montant, contributeurs — hardcodés) | `GET /api/v1/dashboard/stats?period=month` |
| Derniers donateurs (hardcodés) | `GET /api/v1/gift/my-pots-gifts?limit=5&sort=recent` |

### 17. Mes cagnottes — `/dashboard/cagnottes`
Déjà connecté ✅ `GET /api/v1/pots/my-pots`

### 18. Détail cagnotte — `/dashboard/cagnottes/:id`
| Données statiques | Route suggérée |
|---|---|
| Détail de la cagnotte | ✅ `GET /api/v1/pots/:id` |
| Liste des donateurs (onglet Activité, vide) | `GET /api/v1/pots/:id/gifts?page=1&limit=20` |
| Suspendre la cagnotte | `PATCH /api/v1/pots/:id/pause` |
| Fermer la cagnotte | `PATCH /api/v1/pots/:id/close` |
| Reverser les fonds | `POST /api/v1/pots/:id/request-withdrawal` |

### 19. Mes contributions — `/dashboard/contributions`
Déjà connecté ✅ `GET /api/v1/gift/my-gifts`

### 20. Solde — `/dashboard/solde`
| Données statiques | Route suggérée |
|---|---|
| Solde total disponible (mocké) | `GET /api/v1/wallet/balance` |
| Solde par cagnotte (brut, frais, net) | `GET /api/v1/wallet/balance/breakdown` |
| Historique mouvements (mocké) | `GET /api/v1/wallet/transactions?page=1&limit=20&type=IN\|OUT` |

### 21. Reversements — `/dashboard/reversements`
| Données statiques | Route suggérée |
|---|---|
| Liste des demandes (mockées) | `GET /api/v1/withdrawals/my-withdrawals?page=1&limit=20` |
| Filtres statut/période | Paramètres `status` et `period` |

### 22. Demande de reversement — `/dashboard/demandeReversement`
| Données statiques | Route suggérée |
|---|---|
| Moyens de reversement enregistrés (hardcodés : MTN, Moov, Ecobank) | `GET /api/v1/wallet/payout-methods` |
| Solde disponible (hardcodé) | `GET /api/v1/wallet/balance` |
| Opérateurs mobile money (hardcodés) | ✅ `GET /api/v1/telecoms/all` |
| Soumettre une demande | `POST /api/v1/withdrawals/request` |
| Ajouter moyen de paiement (mobile) | `POST /api/v1/wallet/payout-methods` |
| Ajouter moyen de paiement (banque) | `POST /api/v1/wallet/payout-methods/bank` |
| Validation OTP reversement | `POST /api/v1/withdrawals/validate-otp` |

### 23. Profil / Organisation — `/dashboard/account`
| Données statiques | Route suggérée |
|---|---|
| Infos profil utilisateur | `GET /api/v1/user/me` |
| Mise à jour du profil | `PATCH /api/v1/user/me` |
| Statut KYC | `GET /api/v1/user/me/kyc` |
| Soumettre documents KYC | `POST /api/v1/user/me/kyc` |
| Moyens de reversement | `GET /api/v1/wallet/payout-methods` |

---

## 🔢 RÉCAPITULATIF PAR PRIORITÉ

| Priorité | Routes à implémenter |
|---|---|
| 🔴 **Critique** | `GET /wallet/balance`, `GET /wallet/balance/breakdown`, `GET /wallet/transactions`, `GET /withdrawals/my-withdrawals`, `POST /withdrawals/request`, `GET /dashboard/stats` |
| 🟠 **Haute** | `GET /articles`, `GET /articles/:id`, `GET /pots/search`, `GET /pots?categoryId=`, `GET /gift/:id`, `GET /pots/:id/gifts` (dashboard) |
| 🟡 **Moyenne** | `GET /wallet/payout-methods`, `POST /wallet/payout-methods`, `PATCH /pots/:id/pause`, `PATCH /pots/:id/close`, `POST /pots/:id/request-withdrawal` |
| 🟢 **Basse** | `GET /stats/platform`, `GET /testimonials`, `GET /faq`, `GET /fees`, `GET /pots/featured`, `GET /pots/:id/related`, `POST /articles/:id/clap` |
