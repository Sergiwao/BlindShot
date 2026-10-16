# Blind Shot

**Développé par Serge le dev**

Jeu multijoueur 3D stylisé low-poly (2–6 joueurs) : 5 secondes pour bouger **à l'aveugle** (tu ne vois que toi), puis **Verdict** : tous les lasers et grenades partent en même temps. Le dernier debout gagne !

## Modes de jeu
- **En ligne (Mobile & PC)** – Crée un salon ou rejoins celui d'un ami avec un code à 4 lettres. Mode autonome hors-ligne inclus si le serveur n'est pas joignable.
- **Mode local manettes (PC)** – Jusqu'à 6 manettes (PS4, PS5, Xbox) sur un même écran. Tour par tour : le tireur actif vise pendant que les cibles invisibles esquivent à l'aveugle avec vibrations aux murs !
- **Armurerie 3D & Shoot Coins** – 6 armes 3D (Blaster, Railgun, Scatter, Plasma, Quack, Confetti) + Grenades Frag à zone d'impact, avec économie virtuelle et pluie de pièces dorées.

## Déploiement Render.com
Le projet inclut un fichier `render.yaml` et un `package.json` à la racine :
- **Build Command** : `npm run build`
- **Start Command** : `npm start`
- **Port** : automatique via `process.env.PORT`
- **Dashboard en direct** : `https://ton-app.onrender.com/admin`
- **Téléchargement APK** : `https://ton-app.onrender.com/BlindShot.apk`

## Lancer en local
```bash
npm install
npm run build
npm start
```
- Serveur Node + Socket.IO : `http://localhost:2567`
- Console en direct : `http://localhost:2567/admin`
